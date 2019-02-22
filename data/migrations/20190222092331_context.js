exports.up = function(knex, Promise) {
  return knex.schema.createTable("context", tbl => {
    tbl.increments();
    tbl.string("notes");
    tbl.string("description");
    tbl.boolean("completed").defaultTo(false);
    tbl
      .integer("action_id")
      .references("id")
      .inTable("project");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("context");
};
