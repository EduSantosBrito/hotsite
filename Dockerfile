FROM node:13.8-slim as build

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN npm run build --production

FROM nginx:1.10-alpine

RUN rm -rf /etc/nginx/conf.d

COPY conf /etc/nginx

COPY --from=build /usr/src/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]