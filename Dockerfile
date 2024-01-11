FROM node:v20.10.0
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD ["npm", "run", "build"]
