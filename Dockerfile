FROM node:latest

RUN yarn install && npm run build
EXPOSE 80
ENTRYPOINT ["npm", "run", "serve"]