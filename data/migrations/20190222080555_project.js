exports.up = function(knex, Promise) {
  return knex.schema.createTable("project", tbl => {
    tbl.increments();
    tbl.string("name");
    tbl.string("description");
    tbl.timestamps(true, true);
    tbl.boolean("completed").defaultTo(false);
  });
  // - [ x] An `action` belongs to only one project. An action has:
  // - [ x] a unique id.
  // - [x ] a description of what needs to be done.
  // - [x ] a notes column to add additional information.
  // - [x ] a flag that indicates if the action has been completed.
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("project");
};
