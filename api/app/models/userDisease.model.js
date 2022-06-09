module.exports = (sequelize, Sequelize) => {
    const UserDisease = sequelize.define('userDisease',{
        patient_uid: {
            type: Sequelize.STRING,
            model: 'users',
            key: 'UID'
        },
        disease_id: {
            type: Sequelize.STRING,
            model: 'diseases',
            key: 'id'
        },
        disease_name: {
            type: Sequelize.STRING
        }
    });

    return UserDisease;
}