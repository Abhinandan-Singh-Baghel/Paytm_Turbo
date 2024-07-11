FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/app

COPY package.json package-lock.json turbo.json tsconfig.json ./

COPY apps ./apps
COPY packages ./packages

#Install dependencies
RUN npm install -g npm@latest
RUN npm install -g next




RUN npm run db-generate



CMD [ "npm", "run", "start-user-app" ]