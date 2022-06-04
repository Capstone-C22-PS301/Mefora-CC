module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user',{
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    
    return User;
}