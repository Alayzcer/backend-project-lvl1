FROM node:15-alpine3.13
# USER node
WORKDIR /app
ENTRYPOINT [ "/bin/sh" ]

COPY package*.json ./
RUN npm ci
COPY . ./