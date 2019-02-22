const express = require("express");

const db = require("../data/dbConfig");
const server = express.Router();

const errHelper = (err, res) => {
  res.status(500).json({ message: `internal error server ${err}` });
};

//POST for adding actions.
server.post("/:id", async (req, res) => {
  const { description, notes, completed = false } = req.body;
  const { id } = req.params;
  if (!notes || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const project = await db
      .select()
      .from("project")
      .where({ id })
      .first();

    if (project) {
      const [newRecipe] = await db
        .insert({ description, notes, action_id: id, completed })
        .into("actions");

      const posted = await db
        .select()
        .from("actions")
        .where({ id: newRecipe })
        .first();

      res.status(200).json(posted);
    } else {
      res.status(404).json({ message: "project with that id is not found" });
    }
  } catch (err) {
    return errHelper(err, res);
  }
});

module.exports = server;
