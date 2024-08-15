FROM node:20 AS base

ARG NEXT_PUBLIC_DEV_API_URL
ARG NEXT_PUBLIC_PRODUCTION_API_URL
ARG NEXT_PUBLIC_FRONT_ENV_MODE
ARG NEXT_PUBLIC_CDN_URL
ARG NODE_ENV

ENV NEXT_PUBLIC_DEV_API_URL=$NEXT_PUBLIC_DEV_API_URL
ENV NEXT_PUBLIC_PRODUCTION_API_URL=$NEXT_PUBLIC_PRODUCTION_API_URL
ENV NEXT_PUBLIC_FRONT_ENV_MODE="production"
ENV NEXT_PUBLIC_CDN_URL="d2qtp7qksp5k9g.cloudfront.net"
ENV NODE_ENV=$NODE_ENV

FROM base AS deps

RUN apt-get update && apt-get install -y libc6

WORKDIR /app

COPY package.json package-lock.json ./


RUN npm install

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

ENV PORT 3000

CMD ["npm", "run", "start"]
