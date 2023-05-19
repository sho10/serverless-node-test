FROM node:16

WORKDIR /app

COPY package.json .

COPY package-lock.json .

COPY prisma .

COPY .env .

COPY src .

RUN npm install

RUN npm run generate

COPY tsconfig.json .

EXPOSE 3000

CMD ["npm", "start"]


