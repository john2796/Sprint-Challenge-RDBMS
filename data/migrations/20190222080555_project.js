exports.up = function(knex, Promise) {
  return knex.schema.createTable("project", tbl => {
    tbl.increments();
    tbl.string("name");
    tbl.string("description");
    tbl.timestamps(true, true);
    tbl.boolean("completed").notNullable();
  });
  // A project can contain multiple actions and has:
  //x a unique Id.
  //x a name.
  //x a description.
  //x a flag that indicates if the project is complete or not.
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("project");
};
