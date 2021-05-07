const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id:{
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            datev:{
                type: Sequelize.DATEONLY,
                allowNull: true,
            },
            timev:{
                type: Sequelize.TIME,
                allowNull: true,
            },
            temperature:{
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            humidity:{
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            wind_speed: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            precipitation_type: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            fine_dust10: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            Findust2_5: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'weather',
            tableName: 'weather',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        }); 
    }
    static associate(db){}
};