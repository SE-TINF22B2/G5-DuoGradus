FROM node:20

USER node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

CMD [ "node", "dist/main.js" ]