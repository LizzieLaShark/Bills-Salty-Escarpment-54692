
exports.up = function(knex, Promise) {

return knex.schema.createTableIfNotExists('submission_entries', function(table) {
  table.increments('id')
  table.string('billName')
  table.string('name')
  table.integer('phone')
  table.string('email')
  table.string('region')
  table.string('submission')
  table.boolean('appearing')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('submission_entries')
};
