const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            sl_codeid:{
                type: Sequelize.STRING(8),
                allowNull: false,
                unique: true,
                primaryKey: true,
            },
            x:{
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            y:{
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            last_repair_date:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            last_inspection_date:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            failure_status:{
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            left_sl:{
                type: Sequelize.STRING(8),
                allowNull: false,
            },
            right_sl:{
                type: Sequelize.STRING(8),
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'street_light',
            tableName: 'street_light',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        }); 
    }
    static associate(db){
        db.street_light.hasMany(db.road_statistics, {foreignKey: 'sl_code', sourceKey: 'sl_codeid'});
        db.street_light.hasMany(db.sl_statistics, {foreignKey: 'sl_code', sourceKey: 'sl_codeid'});
        db.street_light.hasOne(db.sl_code, {foreignKey: 'sl_code', sourceKey: 'sl_codeid'});
    }
};
