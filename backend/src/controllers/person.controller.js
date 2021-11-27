const pool = require("../config/db");
const query = require("../queries/person.queries");

const getPersons = (req, res) => {
  pool.query(query.getPersons, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getPersonById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(query.getPersonById, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const addPerson = (req, res) => {
  const fullname = req.body.fullname;
  const birth = req.body.birth;

  pool.query(query.getPersonByFullname, [fullname], (error, results) => {
    const personExist = results.rows.length;
    if (personExist) {
      res.status(201).send({ status: 200, response: "Person exists" });
    } else {
      pool.query(query.addUser, [fullname, birth], (error, results) => {
        if (error) throw error;
        res.status(201).send({ status: 200, response: "Created person!" });
      });
    }
  });
};

const personRemove = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(query.getPersonById, [id], (err, results) => {
    const noPersonFound = !results.rows.length;
    if (noPersonFound) {
      res.status(201).send({status:200, response: "Person not found!"})
    }
    pool.query(query.personRemove, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send({ status: 200, response: "Deleted person" });
    });
  });
};


const updatePerson = (req, res) => {
  const id = parseInt(req.params.id);
  const { fullname, birth } = req.body;

  pool.query(query.getPersonById, [id], (err, results) => {
    const noPersonFound = !results.rows.length;
    if (noPersonFound) {
      res.send("Person not found!")
    }

    pool.query(
      query.updatePerson, [fullname, birth, id], (error, results) => {
        if (error) throw error;
        res.status(200).send({ status: 200, response: "Updated person!"})
      }
    )
  })
};

module.exports = {
  getPersons,
  addPerson,
  getPersonById,
  updatePerson,
  personRemove
};
