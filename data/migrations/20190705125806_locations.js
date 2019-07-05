
exports.up = function(knex) {
  return knex.schema.createTable('locations', table => {
    table.increments();
    table.string('store_name');
    table.string('store_location');
    table.string('address');
    table.string('city');
    table.string('state');
    table.string('zip_code');
    table.float('latitiude');
    table.float('longitude');
    table.string('county');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("stores");
};
