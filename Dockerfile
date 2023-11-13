FROM node:18-alpine

ARG VITE_WEATHER_API_KEY
ENV VITE_WEATHER_API_KEY $MY_ENV

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]