module.exports = (sequelize, Sequelize) => {
    const List = sequelize.define('list',{
        patient_uid: {
            type: Sequelize.STRING,
            model: 'users',
            key: 'UID'
        },
        doctor_uid: {
            type: Sequelize.STRING,
            model: 'users',
            key: 'UID'
        },
        patient_name: {
            type: Sequelize.STRING
        }
    });

    return List;
}