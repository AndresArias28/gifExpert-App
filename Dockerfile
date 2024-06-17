FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

//RUN npm install -g serve

EXPOSE 5000

CMD ["npm", "run", "dev"]
