module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user',{
        UID: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNULL: true
        },
        nickname: {
            type: Sequelize.STRING,
            allowNULL: true
        },
        address: {
            type: Sequelize.STRING,
            allowNULL: true
        },
        birth: {
            type: Sequelize.STRING,
            allowNULL: true
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });

    return User;
}