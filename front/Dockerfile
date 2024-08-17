FROM node:18-alpine AS base

ARG NEXT_PUBLIC_DEV_API_URL
ARG NEXT_PUBLIC_PRODUCTION_API_URL
ARG NEXT_PUBLIC_FRONT_ENV_MODE
ARG NEXT_PUBLIC_CDN_URL
ARG SENTRY_AUTH_TOKEN
ARG NEXT_PUBLIC_SENTRY_DSN

ENV NEXT_PUBLIC_DEV_API_URL=$NEXT_PUBLIC_DEV_API_URL
ENV NEXT_PUBLIC_PRODUCTION_API_URL=$NEXT_PUBLIC_PRODUCTION_API_URL
ENV NEXT_PUBLIC_FRONT_ENV_MODE=$NEXT_PUBLIC_FRONT_ENV_MODE
ENV NEXT_PUBLIC_CDN_URL=$NEXT_PUBLIC_CDN_URL
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
ENV NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN


FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN rm -rf ./.next/cache

RUN npm run build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]