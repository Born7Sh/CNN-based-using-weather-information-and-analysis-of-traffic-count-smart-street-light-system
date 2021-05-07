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
            station_name:{
                type: Sequelize.STRING(6),
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'sl_code',
            tableName: 'sl_code',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        }); 
    }
    static associate(db){
        db.sl_code.belongsTo(db.street_light, {foreignKey: 'sl_codeid', sourceKey: 'sl_code'});
    }
};