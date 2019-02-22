require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("morgan");

//routes

//init
const server = express();

//middleware
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger("dev"));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`
  --------------------------------------------------------------------
                        Server running on port ${port}
  --------------------------------------------------------------------
  `);
});
