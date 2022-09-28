FROM node:16

WORKDIR /app

COPY . /app

CMD yarn dev || yarn && yarn dev