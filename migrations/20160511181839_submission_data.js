
exports.up = function(knex, Promise) {

  return knex.schema.createTableIfNotExists('submission_data', function(table) {
    table.increments('id')
    table.string('title')
    table.string('url')
    table.string('info')
    })
  };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('submission_data')
};
