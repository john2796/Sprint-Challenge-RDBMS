const express = require("express");

const db = require("../data/dbConfig");
const server = express.Router();

const errHelper = (err, res) => {
  res.status(500).json({ message: `internal error server ${err}` });
};

// @route    GET api/actions
// @desc     add action
// @Access   Public
server.post("/:id", async (req, res) => {
  const { description, notes } = req.body;
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
        .insert({ description, notes, action_id: id })
        .into("actions")
        .returning("id");

      const post = await db
        .select()
        .from("actions")
        .where({ id: newRecipe });

      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "project with that id is not found" });
    }
  } catch (err) {
    return errHelper(err, res);
  }
});

module.exports = server;
