###############################################################################
# build environment                                                           #
###############################################################################
FROM node:10 as build

WORKDIR /app
COPY client/package*.json ./
RUN npm install

COPY client/ ./
RUN npm run build
RUN ls

###############################################################################
# deployable environment                                                      #
###############################################################################
FROM node:10 as deployable
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY server/package*.json ./


RUN npm install

# Bundle app source
COPY server/ ./
COPY --from=build /app/build/ /usr/src/app/public/

EXPOSE 8080
CMD [ "node", "./bin/www" ]
