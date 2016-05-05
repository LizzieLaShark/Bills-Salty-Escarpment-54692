
exports.up = function(knex, Promise) {

return knex.schema.createTableIfNotExists('submissions', function(table) {
  table.increments('id')
  table.string('title')
  table.string('url')
  table.string('info')
  })
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('submissions')
};
