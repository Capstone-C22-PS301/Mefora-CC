module.exports = (sequelize, Sequelize) => {
    const List = sequelize.define('list',{
        id: {
            type: Sequelize.STRING,
            autoIncrement: true,
            primaryKey: true
        },
        patient_uid: {
            type: Sequelize.STRING,
            model: 'users',
            key: 'UID'
        },
        doctor_uid: {
            type: Sequelize.STRING,
            model: 'users',
            key: 'UID'
        }
    });

    return List;
}