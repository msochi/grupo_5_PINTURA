module.exports = function(sequelize, dataTypes) {
    let alias = "Subtipo";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        },
        subtipo: {
            type: dataTypes.STRING(),
            notNull: true
        },
        id_tipo: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        
    }
    
    let config = {
        tableName: 'subtipo',
        timestamps: false,
        underscored: false,        
    }

    const Subtipo = sequelize.define(alias, cols, config);

    Subtipo.associate = function (models){ 
        Subtipo.belongsTo(models.Tipo, {
            as: 'tipo',
            foreignKey: 'id_tipo',
        } )
    }
   
    return Subtipo
}