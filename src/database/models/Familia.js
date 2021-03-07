module.exports = function(sequelize, dataTypes) {
    let alias = "Familia";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        familia: {
            type: dataTypes.STRING(100),
            notNull: true
        },
    }
    
    let config = {
        tableName: 'familia',
        timestamps: false,
        underscored: false,        
    }

    const Familia = sequelize.define(alias, cols, config);

    Familia.associate = function (models){ 
        Familia.hasMany(models.Subfamilia, {
            as: 'subfamilia',
            foreignKey: 'id_familia',
        } )
    } 
    Familia.associate = function (models){ 
        Familia.hasMany(models.Productos, {
            as: 'productos',
            foreignKey: 'id_familia',
        } )
    }
    
   
    return Familia
}