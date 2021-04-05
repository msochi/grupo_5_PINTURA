module.exports = function(sequelize, dataTypes) {
    let alias = "Clientes";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        nombre: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        apellido: {
            type: dataTypes.STRING(80),
            notNull: true
        },
        dni: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        direccion: {
            type: dataTypes.STRING(),
            notNull: true
        },
        id_localidad: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        codigoPostal: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        id_provincia: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
        telefono: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
        email: {
            type: dataTypes.STRING(80),
            notNull: true,
        },
        pass: {
            type: dataTypes.STRING(),
            notNull: true,
        },
        avatar: {
            type: dataTypes.STRING(100),
            notNull: true,
        },
        tipo: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
    }
    
    let config = {
        tableName: 'clientes',
        paranoid: true,
        timestamps: true,
        underscored: true,         
    }

    const Clientes = sequelize.define(alias, cols, config)

    Clientes.associate = function (models){ 
        Clientes.belongsTo(models.Provincias, {
            as: 'provincias',
            foreignKey: 'id_provincia',
        } )
    }

    Clientes.associate = function (models){ 
        Clientes.belongsTo(models.Localidades, {
            as: 'localidades',
            foreignKey: 'id_localidad',
        } )
    }
    Clientes.associate = function (models){ 
        Clientes.hasMany(models.Ventas, {
            as: 'clientes',
            foreignKey: 'id_clientes',
        } )
    }

    return Clientes
}