const express = require("express");

const db = require("../data/dbConfig");
const server = express.Router();

const errHelper = (err, res) => {
  res.status(500).json({ message: `internal error server ${err}` });
};

//  GET for retrieving a project by its id that returns an object with the following structure:
server.get("/:id", async (req, res) => {
  // const { limit = 10, page = 1, name } = req.query;
  const { id } = req.params;
  try {
    let projects = await db
      .select()
      .from("project")
      .where({ id });

    const results = projects.map(async project => {
      const actions = await db
        .select()
        .from("actions")
        .orderBy("id", "desc")
        .where({ action_id: project.id });

      project.actions = actions;
      return project;
    });

    Promise.all(results).then(completed => {
      projects = completed;
      res.status(200).json(projects);
    });
  } catch (err) {
    return errHelper(err, res);
  }
});

//POST for adding projects.
server.post("/", async (req, res) => {
  const { name, description, completed = false } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: "all fields are required" });
  }
  try {
    const [posted] = await db
      .insert({ name, description, completed })
      .into("project");

    console.log(posted);

    if (posted) {
      const newProject = await db
        .select()
        .from("project")
        .where({ id: posted })
        .first();
      res.status(200).json(newProject);
    } else {
      res.status(404).json({ message: "dishes with that id is not found" });
    }
  } catch (err) {
    return errHelper(err, res);
  }
});

module.exports = server;
