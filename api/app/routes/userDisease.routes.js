const { route } = require('express/lib/router');

module.exports = app => {
    const userDiseases = require('../controllers/userDisease.controller.js');

    let router = require('express').Router();

    //Create a new userDiseases
    router.post("/", userDiseases.create);

    //Retrieve all userDiseases
    router.get("/", userDiseases.findAll);

    //Retrieve single userDiseases
    //router.get("/name", userDiseases.findOne);

    //Update single userDiseases
    //router.put("/:UID", userDiseases.update);

    //Delete single diseases
    //router.delete("/:UID", userDiseases.delete);

    app.use("/api/userDiseases", router);
}