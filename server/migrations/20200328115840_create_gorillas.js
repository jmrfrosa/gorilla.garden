
exports.up = function(knex) {
  return knex.schema.createTable('gorillas', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('gender');
    table.integer('parent_relation_id');
    table.foreign('parent_relation_id').references('relation.id');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('gorillas');
};
