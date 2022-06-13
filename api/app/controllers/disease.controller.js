const { route } = require('express/lib/router');
const db = require('../models');
const Disease = db.diseases;
const Op = db.Sequelize.Op;

//Create
exports.create = (req, res) => {
    if(!req.body.disease){
        res.status(400).send({
            message: "content can not be empty"
        });
        return;
    }

    const list = {
        disease: req.body.disease
    }

    Disease.create(list)
        .then((data) => {
            if(data) {
                res.send({
                    success: true,
                    message: "list was created successfully"
                });
            } else {
                res.send({ 
                    success: false,
                    message: "Cannot create list" 
                });
            }
        }).catch((err) => {
            res.status(500).send({ 
                message: 
                    err.message || "Some error occurred while creating List"
                });
        });

};

//Retrieve all
exports.findAll = (req, res) => {
    const disease =  req.query.disease;
    let condition = disease ? { disease: { [Op.like]: `%${disease}%` } } : null;
    
    Disease.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: 
                err.message || "Some error occurred while find user"
            });
        });
};

//Find a single
exports.findOne = (req, res) => {
    const disease =  req.headers.disease;
    let condition = disease ? { disease: { [Op.like]: `%${disease}%` } } : null;
    
    Disease.findOne({ where: condition })
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: 
                err.message || "Some error occurred while find user"
            });
        });
};

//Update a User with UID
exports.update = (req, res) => {
    
};

//Delete a User with UID
exports.delete = (req, res) => {
    

};

//Delete all
exports.DeleteAll = (req, res) => {
    
};

//Find all published
exports.findAllPublished = (req, res) => {

};

