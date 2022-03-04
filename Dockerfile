FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY public /usr/src/app/public
COPY src /usr/src/app/src
ENV REACT_APP_PROJECT_NAME  Meu Primeiro Alô
ENV REACT_APP_SERVER_URL api.meuprimeiroalo.com.br
ENV REACT_APP_HOST_NAME meuprimeiroalo.com.br
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]