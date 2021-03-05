module.exports = function(sequelize, dataTypes) {
    let alias = "Terminacion";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        terminacion: {
            type: dataTypes.STRING(),
            notNull: true
        },      
    }
    
    let config = {
        tableName: 'terminacion',
        timestamps: false,
        underscored: false,        
    }

    const Terminacion = sequelize.define(alias, cols, config);

    Terminacion.associate = function (models){ 
        Terminacion.hasMany(models.Productos, {
            as: 'productos',
            foreignKey: 'id_terminacion',
        } )
    }

    return Terminacion
}