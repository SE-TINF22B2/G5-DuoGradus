FROM node:20

USER node

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

COPY --chown=node:node . .

ENV NODE_ENV production

RUN npm run build

RUN npm run db:migrate

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]