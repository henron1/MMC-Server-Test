const db = require('../data/dbConfig');

const getLocations = () => {
    return db('locations')
    .select(
      'store_name',
      'store_location',
      'address',
      'city',
      'state',
      'zip_code',
      'latitude',
      'longitude',
      'county',
    )
  };

module.exports = {
    getLocations
}

