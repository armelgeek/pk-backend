FROM node:20-alpine AS build

WORKDIR /var/www/backend

COPY ./package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /var/www/backend

COPY --from=build /var/www/backend/dist ./dist
COPY --from=build /var/www/backend/src/data/Fragment.json ./dist/data/
COPY --from=build /var/www/backend/package*.json ./
COPY --from=build /var/www/backend/node_modules ./node_modules
COPY --from=build /var/www/backend/ormconfig.js ./ 
CMD ["npm", "run", "prod", "--", "--bind", "0.0.0.0:4000"]
