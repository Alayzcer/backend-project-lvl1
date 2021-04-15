FROM node:15-alpine3.13
# USER node
WORKDIR /app
ENTRYPOINT [ "/bin/sh" ]

RUN apk add make
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm link