module.exports = function(sequelize, dataTypes) {
    let alias = "Tipo";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        tipo: {
            type: dataTypes.STRING(),
            notNull: true
        }, 
        id_subfamilia: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },                   
    }
    
    let config = {
        tableName: 'tipo',
        timestamps: false,
        underscored: false,        
    }

    const Tipo = sequelize.define(alias, cols, config);
    
    Tipo.associate = function (models){ 
        Tipo.belongsTo(models.Subamilia, {
            as: 'subfamilia',
            foreignKey: 'id_subfamilia',
        } )
    },
    Tipo.associate = function (models){ 
        Tipo.hasMany(models.Subtipo, {
            as: 'subtipo',
            foreignKey: 'id_tipo',
        } )
    }    
  
    return Tipo
}