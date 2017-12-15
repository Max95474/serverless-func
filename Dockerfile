FROM node:8.9.3

ADD . /func
WORKDIR /func

RUN npm install
CMD ["node", "app.js"]