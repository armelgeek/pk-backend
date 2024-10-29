module.exports = {
  "type": "mongodb",
  "url": "mongodb+srv://superapp261:YynkPbMBt9HcFZeH@pokerapps.6euls.mongodb.net/docker-node-mongo?retryWrites=true&w=majority",
  "useUnifiedTopology": true,
  "useNewUrlParser": true,
  "synchronize": false,
  "entities": [
    "dist/data/do/**/*.js"
  ],
  "seeds": [
    "dist/seeds/*.js"
  ],
};
