FROM node:18-alpine

ENV VITE_WEATHER_API_KEY 

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]