FROM node:alpine
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
