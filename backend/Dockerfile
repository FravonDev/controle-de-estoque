FROM node:18.12.1

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

COPY . .
RUN npm install

EXPOSE 3000

CMD [ "npm","run","dev" ]

