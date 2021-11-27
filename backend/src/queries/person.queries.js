const getPersons = "SELECT * FROM persons";
const getPersonById = "SELECT * FROM persons WHERE id = $1";
const addUser = "insert into persons(fullname, birth) values ($1, $2)";
const getPersonByFullname = "SELECT * FROM persons WHERE fullname = $1";
const personRemove = "DELETE FROM persons WHERE id $1";
const updatePerson =
  "UPDATE persons SET fullname = $1, birth = $2 WHERE id = $3";


module.exports = {
  getPersons,
  addUser,
  getPersonByFullname,
  updatePerson,
  getPersonById,
  personRemove
};
