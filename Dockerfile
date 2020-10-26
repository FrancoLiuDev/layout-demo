FROM node:lts-alpine

COPY . .
RUN npm install && npm run build
EXPOSE 80
ENTRYPOINT ["npm", "run", "serve"]