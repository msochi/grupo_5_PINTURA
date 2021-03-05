module.exports = function(sequelize, dataTypes) {
    let alias = "Proveedores";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        proveedor: {
            type: dataTypes.STRING(100),
            notNull: true
        },
    }
    
    let config = {
        tableName: 'proveedores',
        timestamps: false,
        underscored: false,        
    }

    const Proveedores = sequelize.define(alias, cols, config);

    Proveedores.associate = function (models){ 
        Proveedores.hasMany(models.Marcas, {
            as: 'marca',
            foreignKey: 'id_proveedor',
        } )
    }
   
    Proveedores.associate = function (models){ 
        Proveedores.hasMany(models.Productos, {
            as: 'productos',
            foreignKey: 'id_proveedor',
        } )
    }  
   
   
   Proveedores.associate = function(models){
        Proveedores.belongsToMany(models.Marcas, {

        as: "marcas",    
        through: "productos",    
        foreignKey: "id_proveedor",        
        otherKey: "id_marca",  
        timestamps: false
    
    });
    }

    return Proveedores
}