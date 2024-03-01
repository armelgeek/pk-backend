module.exports = {
  "type": "mongodb",
  "host": "mongo",
  // "host": "localhost",
  "port": 27017,
  // "password": "node1234",
  // "username": "root",
  "database": "docker-node-mongo",
  "useUnifiedTopology": true,
  "useNewUrlParser": true,
  "synchronize": false,
  "entities": [
    // "dist/data/do/**/*.js",
    "src/data/do/**/*.ts"
  ],
  "seeds": [
    // "dist/seeds/*.js",
    "src/seeds/*.ts"
  ],
}