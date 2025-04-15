FROM node:lts-slim
WORKDIR /jmanzani-porfolio

COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]