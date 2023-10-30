const { Model , DataTypes, Sequelize} = require("sequelize");

const Person_table = 'products';

class Produc extends Model {
    static config(sequelize){
        return{
            sequelize,
            tableName: Person_table,
            modelName: 'Prod',
            timestamps: true
        }
    }
}

const ProSchema = {
    id: {
        allwNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre'
    },
    proveedor:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'proveedor'
    },

    descripcion:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    stock:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'stock'
    }
}

module.exports = {Produc, ProSchema};