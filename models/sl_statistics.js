const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            sl_code:{
                type: Sequelize.STRING(8),
                allowNull: false,
                unique: true,
                primaryKey: true,
            },
            amount_of_light_used:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'sl_statistics',
            tableName: 'sl_statistics',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        }); 
    }
    static associate(db){
        db.sl_statistics.belongsTo(db.street_light, {foreignKey: 'sl_code', targetKey: 'sl_codeid'});
    }
};