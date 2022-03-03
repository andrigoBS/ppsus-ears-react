FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
COPY src /usr/src/app/src
COPY public /usr/src/app/public
RUN --mount=type=secret,mode=0644,id=npmrc,target=/usr/src/app/.npmrc npm install
RUN npm run build

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]