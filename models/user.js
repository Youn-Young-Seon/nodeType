const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci'
        })
    }
    static associate(db) {}
}