FROM node:alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copying package.json 
COPY package.json yarn.lock ./

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