FROM node:latest
ADD tmp.tgz /
RUN yarn install && npm run build
EXPOSE 80
ENTRYPOINT ["npm", "run", "serve"]