const { route } = require('express/lib/router');

module.exports = app => {
    const users = require('../controllers/user.controller.js');

    let router = require('express').Router();

    //Create a new user
    router.post("/", users.create);

    //Retrieve all users
    router.get("/", users.findAll);

    //Retrieve single users
    router.get("/uid", users.findOne);

    //Update single users
    router.put("/uid", users.update);

    //Delete single users
    router.delete("/uid", users.delete);

    app.use("/api/users", router);
}