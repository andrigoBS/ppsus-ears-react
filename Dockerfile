#FROM node:lts-alpine AS build
#WORKDIR /usr/src/app
#COPY package*.json /usr/src/app/
#RUN --mount=type=secret,mode=0644,id=npmrc,target=/usr/src/app/.npmrc npm ci --only=production
#
#FROM node:lts-alpine
#RUN apk add dumb-init
#ENV NODE_ENV production
#USER node
#WORKDIR /usr/src/react
#COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/react/node_modules
#COPY --chown=node:node . /usr/src/react

FROM node:lts-alpine
WORKDIR /usr/src/react
COPY package*.json /usr/src/react/
RUN npm i --production
COPY . .

#FROM nginx:stable-alpine as prod
#
#COPY --from=build /usr/src/react/build /usr/share/nginx/html
#
#EXPOSE 80
#
#CMD ["nginx", "-g", "daemon off;"]
