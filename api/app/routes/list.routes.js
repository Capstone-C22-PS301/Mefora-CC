const { route } = require('express/lib/router');
const authMiddleware = require('../middleware/authMiddleware')

module.exports = app => {
    const lists = require('../controllers/list.controller.js');

    let router = require('express').Router();

    //Create a new list
    router.post("/", lists.create);

    //Retrieve all lists
    router.get("/doctor_uid", lists.findAll);

    //Retrieve single users
    //router.get("/:UID", users.findOne);

    //Update single users
    //router.put("/:UID", users.update);

    //Delete single users
    //router.delete("/:UID", users.delete);

    app.use("/api/lists", [authMiddleware], router);
}