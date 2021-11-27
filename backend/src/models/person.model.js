module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define("persons", {
    fullName: {
      type: Sequelize.STRING,
    },
    birth: {
      type: Sequelize.DATE,
    },
  });
  return Person;
};
