FROM node
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./index.js ./index.js
EXPOSE 3000
CMD ["npm", "start"]

