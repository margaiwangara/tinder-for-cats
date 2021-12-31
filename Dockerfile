FROM node:alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copying package.json 
COPY package.json ./
COPY yarn.lock ./

# Production use node instead of root
USER node

# Set yarn cache folder - yarn cache is used to store downloaded packages
# reduces the size of the final image because it will 
# no longer contain unneeded archives in yarn cache directory
# yarn cache is not needed in production
ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache

# Installing dependencies
RUN yarn install --production --frozen-lockfile

# Copying source files
COPY . /usr/src/app

# Building app
RUN yarn build

# expose port
EXPOSE 3000

# Running the app
CMD ["yarn", "start"]