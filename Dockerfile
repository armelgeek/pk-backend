FROM node:20.11.0 as build-bo

# Create the workdir 
RUN mkdir -p /var/www/bo

# RUN rm -rf /var/www/bo/models

# Set the workdir to /var/www/bo
WORKDIR /var/www/bo

# Copy the package.json & package.lock.json first
# If there's no change in package.json,
# Docker will skip this step and we will win more times in build process
COPY ./bo/package*.json ./

# Install dependencies
# This step will be skipped if there's no change to package.json
RUN npm i --force

# Copy project folders & files
COPY ./bo/. .

RUN npm run build:prod

FROM node:20.11.0

# Create the workdir 
RUN mkdir -p /var/www/backend

# RUN rm -rf /var/www/bo/models

# Set the workdir to /var/www/backend
WORKDIR /var/www/backend

# # Install pg-god globally
# RUN npm i -g pg-god

# Copy the package.json & package.lock.json first
# If there's no change in package.json,
# Docker will skip this step and we will win more times in build process
COPY ./package*.json ./

# Install dependencies
# This step will be skipped if there's no change to package.json
RUN npm i --force

# Copy project folders & files
COPY ./. .

# RUN npm i

# Run build
RUN npm run build

COPY ./src/data/Fragment.json ./dist/data/

RUN mkdir -p ./dist/bo

COPY --from=build-bo /var/www/bo/dist/. ./dist/bo/

CMD npm run prod --bind 0.0.0.0:4000
