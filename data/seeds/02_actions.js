exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "action description",
          notes: "the action notes",
          completed: false // or true
        },
        {
          description: "another action description",
          notes: "the action notes",
          completed: false // or true
        }
      ]);
    });
};
