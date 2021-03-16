module.exports = function(sequelize, dataTypes) {
    let alias = "Productos";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        sku: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        id_marca: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        id_subtipo: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        id_tipo: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        id_subfamilia: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        id_familia: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        presentacion: {
            type: dataTypes.STRING(),
            notNull: true
        },
        contenido_neto: {
            type: dataTypes.STRING(),
            notNull: true
        },
        color: {
            type: dataTypes.STRING(),
            notNull: true
        },
        tiempo_entre_manos: {
            type: dataTypes.STRING(),
            notNull: true
        },
        base: {
            type: dataTypes.STRING(),
            notNull: true
        },
        id_terminacion: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        rendimiento: {
            type: dataTypes.STRING(),
            notNull: true
        },
        uso_recomendado: {
            type: dataTypes.STRING(),
            notNull: true
        },
        tiempo_de_secado: {
            type: dataTypes.STRING(),
            notNull: true
        },
        garantia: {
            type: dataTypes.STRING(),
            notNull: true
        },
        id_proveedor: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        imagen_producto: {
            type: dataTypes.STRING(),
            notNull: true
        },
    }
    
    let config = {
        tableName: 'productos',
        paranoid: true,
        timestamps: true,
        underscored: true,        // sino tenemos timestamps, underscored va falso para que lo tome correctamente la base de datos, sino no levanta correctamente el dato.
    }

    const Productos = sequelize.define(alias, cols, config);

  
    Productos.associate = function (models){ 
        Productos.belongsTo(models.Marcas, {
            as: 'marcas',
            foreignKey: 'id_marca',
        } )
    }
    Productos.associate = function (models){ 
        Productos.belongsTo(models.Subtipo, {
            as: 'subtipo',
            foreignKey: 'id_subtipo',
        } )
    }
    Productos.associate = function (models){ 
        Productos.belongsTo(models.Tipo, {
            as: 'tipo',
            foreignKey: 'id_tipo',
        } )
    }
    Productos.associate = function (models){ 
        Productos.belongsTo(models.Subfamilia, {
            as: 'subfamilia',
            foreignKey: 'id_subfamilia',
        } )
    }
    Productos.associate = function (models){ 
        Productos.belongsTo(models.Familia, {
            as: 'familia',
            foreignKey: 'id_familia',
        } )
    }
    Productos.associate = function (models){ 
        Productos.belongsTo(models.Terminacion, {
            as: 'terminacion',
            foreignKey: 'id_terminacion',
        } )
    }
    Productos.associate = function (models){ 
        Productos.belongsTo(models.Proveedores, {
            as: 'proveedores',
            foreignKey: 'id_proveedor',
        } )
    }  
   

    return Productos
}