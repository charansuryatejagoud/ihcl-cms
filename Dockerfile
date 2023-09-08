
# Install dependencies only when needed
FROM node:16-alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY . .

ENV NODE_OPTIONS --max_old_space_size=4096
RUN yarn install

# Configure the dataset before build, defaults to "staging"
ARG DATASET=production
ENV SANITY_STUDIO_API_DATASET $DATASET
ENV NODE_ENV production
RUN echo "Building for dataset: $SANITY_STUDIO_API_DATASET" && yarn build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app
COPY --from=builder /app/build .

# Install globally
ENV NODE_ENV production
RUN mkdir /npm_modules
RUN npm config set prefix=/npm_modules
RUN yarn global add serve

EXPOSE 3333
CMD ["/npm_modules/bin/serve", "--single", "--listen", "3333"]
