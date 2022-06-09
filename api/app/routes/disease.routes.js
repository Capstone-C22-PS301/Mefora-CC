const { route } = require('express/lib/router');

module.exports = app => {
    const diseases = require('../controllers/disease.controller.js');

    let router = require('express').Router();

    //Create a new diseases
    router.post("/", diseases.create);

    //Retrieve all diseases
    router.get("/", diseases.findAll);

    //Retrieve single diseases
    router.get("/name", diseases.findOne);

    //Update single diseases
    //router.put("/:UID", diseases.update);

    //Delete single diseases
    //router.delete("/:UID", diseases.delete);

    app.use("/api/diseases", router);
}