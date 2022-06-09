module.exports = (sequelize, Sequelize) => {
    const Disease = sequelize.define('disease',{
        disease: {
            type: Sequelize.STRING
        }
    });

    return Disease;
}