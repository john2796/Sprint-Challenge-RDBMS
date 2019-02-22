exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("project")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project").insert([
        { name: "project1", description: "testing", completed: false },
        { name: "project2", description: "testing", completed: false },
        { name: "project3", description: "testing", completed: false }
      ]);
    });
};
