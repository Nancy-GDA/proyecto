FROM node:12

COPY package*.json /usr/src/app/

WORKDIR /usr/src/app

# install app dependencies
RUN npm install --silent

COPY [".", "/usr/src/app"]

EXPOSE 8080

CMD npm start
