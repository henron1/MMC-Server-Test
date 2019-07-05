const db = require('../data/dbConfig');

const getLocations = () => {
    return db('locations')
  };

module.exports = {
    getLocations
}

