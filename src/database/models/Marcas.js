module.exports = function(sequelize, dataTypes) {
    let alias = "Marcas";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        marca: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        id_proveedor: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
    }
    
    let config = {
        tableName: 'marcas',
        timestamps: false,
        underscored: false,        
    }

    const Marcas = sequelize.define(alias, cols, config);

    Marcas.associate = function (models){ 
        Marcas.belongsTo(models.Proveedores, {
            as: 'proveedores',
            foreignKey: 'id_proveedor',
        } )
    }
 
	Marcas.associate = function(models){
        Marcas.belongsToMany(models.Proveedores, {

        as: "proveedores",    
        through: "productos",    
        foreignKey: "id_marca",        
        otherKey: "id_proveedor",  
        timestamps: false
    
    });
    }
    
     return Marcas
}