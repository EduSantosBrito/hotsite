FROM node:13.8.0-slim

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 3000

CMD ["npm", "start"]