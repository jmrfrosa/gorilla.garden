
exports.up = function(knex) {
  return knex.schema.createTable('relations', table => {
    table.increments('id').primary();
    table.integer('gorilla_a_id');
    table.integer('gorilla_b_id');
    table.foreign('gorilla_a_id').references('gorilla.id');
    table.foreign('gorilla_b_id').references('gorilla.id');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('relations');
};
