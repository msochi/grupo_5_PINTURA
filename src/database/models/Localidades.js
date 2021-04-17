module.exports = function(sequelize, dataTypes) {
    let alias = "Localidades";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        localidad: {
            type: dataTypes.STRING(),
            notNull: true
        },
        id_provincia: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
    }
    
    let config = {
        tableName: 'localidades',
        timestamps: false,
        underscored: false,        
    }

    const Localidades = sequelize.define(alias, cols, config);

    Localidades.associate = function (models){ 
        Localidades.belongsTo(models.Provincias, {
            as: 'provincias',
            foreignKey: 'id_provincia',
        } )
    }

    Localidades.associate = function (models){ 
        Localidades.hasMany(models.Clientes, {
            as: 'clientes',
            foreignKey: 'id',
        } )
    }
    //FUNCIONA json
    Localidades.associate = function (models){ 
        Localidades.belongsTo(models.Clientes, {
            as: 'clientes',
            foreignKey: 'id',
        } )
    }
    return Localidades
}