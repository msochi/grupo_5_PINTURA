module.exports = function(sequelize, dataTypes) {
    let alias = "Provincias";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        provincia: {
            type: dataTypes.STRING(),
            notNull: true
        },
    }
    
    let config = {
        tableName: 'provincias',
        timestamps: false,
        underscored: false,        
    }

    const Provincias = sequelize.define(alias, cols, config);

    Provincias.associate = function (models){ 
        Provincias.hasOne(models.Localidades, {
            as: 'localidades',
            foreignKey: 'id_localidad',
        } )
    }
    
    Provincias.associate = function (models){ 
        Provincias.hasMany(models.Clientes, {
            as: 'clientes',
            foreignKey: 'id_provincia',
        } )
    }  

    return Provincias
}

///a