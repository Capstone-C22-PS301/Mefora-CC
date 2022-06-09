const { route } = require('express/lib/router');
const db = require('../models');
const UserDisease = db.userDiseases;
const Op = db.Sequelize.Op;

//Create
exports.create = (req, res) => {
    if (!req.body.patient_uid) {
        res.status(400).send({
            message: "content can not be empty"
        });
        return;
    }

    const userDiease = {
        patient_uid: req.body.patient_uid,
        disease_id: req.body.disease_id,
        disease_name: req.body.disease_name
    }

    UserDisease.create(list)
        .then((data) => {
            if (data) {
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

//get patient with doctor uid
exports.findAll = (req, res) => {
    const patient_uid = req.headers.patient_uid;
    let condition = patient_uid ? { patient_uid: { [Op.like]: `%${patient_uid}%` } } : null;

UserDisease.findAll({ where: condition })
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while find user"
        });
    });
};