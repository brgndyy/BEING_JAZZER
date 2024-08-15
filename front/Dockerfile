# Base image 설정
FROM node:18-alpine AS base

# 환경 변수 설정
ARG NEXT_PUBLIC_DEV_API_URL
ARG NEXT_PUBLIC_PRODUCTION_API_URL
ARG NEXT_PUBLIC_FRONT_ENV_MODE
ARG NEXT_PUBLIC_CDN_URL

ENV NEXT_PUBLIC_DEV_API_URL=$NEXT_PUBLIC_DEV_API_URL
ENV NEXT_PUBLIC_PRODUCTION_API_URL=$NEXT_PUBLIC_PRODUCTION_API_URL
ENV NEXT_PUBLIC_FRONT_ENV_MODE="production"
ENV NEXT_PUBLIC_CDN_URL=$NEXT_PUBLIC_CDN_URL
ENV NODE_ENV=production

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# Build 단계
FROM deps AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

# 소스 코드 복사 (node_modules는 제외됨)
COPY . .

RUN rm -rf ./.next/cache

# Next.js 빌드 실행
RUN npm run build

# Runner 단계
FROM base AS runner

WORKDIR /app

# 사용자 및 권한 설정
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 빌드된 파일들 복사
COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/node_modules ./node_modules

# 사용자 변경
USER nextjs

# 포트 노출
EXPOSE 3000

# 애플리케이션 시작 명령어
CMD ["npx", "next", "start"]
