module.exports = {
  // type: "mongodb",
  // url: "mongo",
  // port: "27017",
  // database: "docker-node-mongo",
  // password: "node1234",
  // username: "root",
  // driver: { useUnifiedTopology: true },
  // logging: true,
  // synchronize: true,
  "type": "mongodb",
  "host": "mongo",
  "port": 27017,
  "password": null,
  "username": null,
  "database": "docker-node-mongo",
  "useUnifiedTopology": true,
  "useNewUrlParser": true,
  "synchronize": false,
  "entities": [
    "dist/data/do/**/*.js",
    "src/data/do/**/*.ts"
  ],
  "seeds": [
    "dist/seeds/*.js"
  ],
}
