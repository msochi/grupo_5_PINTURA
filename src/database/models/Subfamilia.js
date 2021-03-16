module.exports = function(sequelize, dataTypes) {
    let alias = "Subfamilia";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        subfamilia: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        id_familia: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        }, 
    }
    
    let config = {
        tableName: 'subfamilia',
        timestamps: false,
        underscored: false,        
    }

    const Subfamilia = sequelize.define(alias, cols, config);
    
    Subfamilia.associate = function (models){ 
        Subfamilia.belongsTo(models.Familia, {
            as: 'familia',
            foreignKey: 'id_familia',
        } )
    },
    Subfamilia.associate = function (models){ 
        Subfamilia.hasMany(models.Tipo, {
            as: 'tipo',
            foreignKey: 'id_subfamilia',
        } )
    }
   
    return Subfamilia
}