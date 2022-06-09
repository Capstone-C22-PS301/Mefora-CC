module.exports = (sequelize, Sequelize) => {
    const Disease = sequelize.define('disease',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        disease: {
            type: Sequelize.STRING
        }
    });

    return Disease;
}