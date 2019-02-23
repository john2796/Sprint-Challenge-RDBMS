exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.string("notes");
    tbl.string("description");
    tbl.boolean("completed").defaultTo(false);
    tbl
      .integer("action_id")
      .references("id")
      .inTable("project");
  });
  // A project can contain multiple actions and has:
  //x a unique Id.
  //x a name.
  //x a description.
  //x a flag that indicates if the project is complete or not.
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
