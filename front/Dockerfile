FROM node:20-alpine AS base

ARG NEXT_PUBLIC_DEV_API_URL
ARG NEXT_PUBLIC_PRODUCTION_API_URL
ARG NEXT_PUBLIC_FRONT_ENV_MODE
ARG NEXT_PUBLIC_CDN_URL

ENV NEXT_PUBLIC_DEV_API_URL=$NEXT_PUBLIC_DEV_API_URL
ENV NEXT_PUBLIC_PRODUCTION_API_URL=$NEXT_PUBLIC_PRODUCTION_API_URL
ENV NEXT_PUBLIC_FRONT_ENV_MODE=$NEXT_PUBLIC_FRONT_ENV_MODE
ENV NEXT_PUBLIC_CDN_URL=$NEXT_PUBLIC_CDN_URL

WORKDIR /app

FROM base AS deps

RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS builder

COPY . .
RUN rm -rf ./.next/cache
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

RUN addgroup -S nextjs && adduser -S -G nextjs nextjs
USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
