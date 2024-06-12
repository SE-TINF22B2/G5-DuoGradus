FROM node:20

USER node

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

COPY --chown=node:node . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
