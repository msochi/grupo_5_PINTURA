module.exports = function(sequelize, dataTypes) {
    let alias = "Ventas";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        id_Producto: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        id_clientes: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        unidades: {
            type: dataTypes.DECIMAL(),
            notNull: true
        },
          }
    
    let config = {
        tableName: 'ventas',
        paranoid: true,
        timestamps: true,
        underscored: true,        // sino tenemos timestamps, underscored va falso para que lo tome correctamente la base de datos, sino no levanta correctamente el dato.
    }

    const Ventas = sequelize.define(alias, cols, config);

  
    Ventas.associate = function (models){ 
        Ventas.belongsTo(models.Marcas, {
            as: 'productos',
            foreignKey: 'id_producto',
        } ),
        Ventas.belongsTo(models.Subtipo, {
            as: 'clientes',
            foreignKey: 'id_clientes',
        } )
    }

   

    return Ventas
}