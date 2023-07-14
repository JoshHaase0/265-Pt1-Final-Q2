var express = require('express');
var router = express.Router();

var projects = require("./projects").getProjects();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('<p>HTML Data</p>');
});

router.get("/projects", (req, res) => {
  res.send(projects.sort((a, b) => a.id - b.id));
});
router.get("/projects/active", (req, res) => {
  res.send(projects.filter((_) => _.isActive))
});
router.get("/projects/:id", (req, res) => {
  const id = req.params.id;
  const idProj = projects.filter((_) => _.id.toString() === id)
  const exists = idProj.length > 0 ? true : false;
  if (exists) {
    res.send(idProj[0]);
  } else {
    res.status(404);
    res.send({message: "No Project Found"});
  }
});


module.exports = router;
