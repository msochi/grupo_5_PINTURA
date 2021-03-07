module.exports = function(sequelize, dataTypes) {
    let alias = "Stock";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        id_producto: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        stock: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        }, 
    }
    
    let config = {
        tableName: 'stock',
        timestamps: false,
        underscored: false,        
    }

    const Stock = sequelize.define(alias, cols, config)
    return Stock
}