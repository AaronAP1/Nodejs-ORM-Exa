const { Person, PersonSchema } = require('./usuario.model');
const { Produc, ProSchema} = require('./producto.model');

function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    Produc.init(ProSchema, Produc.config(sequelize));
}

module.exports = setupModels;