FROM node:8.10.0-alpine as step01
WORKDIR /usr/src
COPY ./package.json /usr/src/package.json
RUN npm install
COPY . /usr/src
RUN npm run build

# FROM nginx:1.13.6
FROM nginx:stable-alpine as production-stage
WORKDIR /usr/share/nginx/html
COPY --from=step01 /usr/src/dist .
# COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
