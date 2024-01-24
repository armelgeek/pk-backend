FROM node:16.13.0

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
RUN npm i

# Copy project folders & files
COPY ./bo/. .

RUN npm run build:prod

FROM node:20

# Create the workdir 
RUN mkdir -p /var/www/backend

# RUN rm -rf /var/www/bo/models

# Set the workdir to /var/www/backend
WORKDIR /var/www/backend

# COPY --from=build-bo /var/www/bo/dist ./bo

# # Install pg-god globally
# RUN npm i -g pg-god

# Copy the package.json & package.lock.json first
# If there's no change in package.json,
# Docker will skip this step and we will win more times in build process
COPY ./package*.json ./

# Install dependencies
# This step will be skipped if there's no change to package.json
RUN npm i

# Copy project folders & files
COPY ./. .

# RUN npm i

# Run build
RUN npm run build

COPY ./src/data/Fragment.json ./dist/data/

CMD npm run prod --bind 0.0.0.0:4000
