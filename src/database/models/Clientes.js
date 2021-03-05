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
    }
    
    let config = {
        tableName: 'clientes',
        timestamps: false,
        underscored: false,        
    }

    const clientes = sequelize.define(alias, cols, config)
    return clientes
}