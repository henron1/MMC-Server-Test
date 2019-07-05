
exports.up = function(knex) {
  return knex.schema.createTable('locations', table => {
    table.increments();
    table.string('storeName');
    table.string('storeLocation');
    table.citext('address');
    table.string('city');
    table.string('state');
    table.int('zipcode');
    table.string('latitiude');
    table.string('longitude');
    table.string('county');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("stores");
};
