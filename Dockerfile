FROM node:lts-alpine3.15
WORKDIR /src
RUN apk update && \
    apk upgrade && \
    apk add git && \
    npm install -g npm@8.11.0
RUN npm install nuxi nuxt3
RUN npm install @storyblok/nuxt sass axios
#docker compose up tacolab_com --build 
#RUN npx nuxi init ..
    
    