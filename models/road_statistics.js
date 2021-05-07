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
            date_time:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            human_traffic:{
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            vehicle_traffic: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            llumination: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'road_statistics',
            tableName: 'road_statistics',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        }); 
    }
    static associate(db){
        db.road_statistics.belongsTo(db.street_light, {foreignKey: 'sl_code', targetKey: 'sl_codeid'});
    }
};