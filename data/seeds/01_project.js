exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("project")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("project").insert([
        {
          name: "project name here",
          description: "the project description",
          completed: false
        }
      ]);
    });
};
