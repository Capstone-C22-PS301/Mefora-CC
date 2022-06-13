module.exports = {
    HOST: '34.135.51.7',
    USER: 'masterdb',
    PASSWORD: 'masterdb',
    DB: "mefora",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};