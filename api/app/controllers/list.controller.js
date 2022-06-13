const { route } = require('express/lib/router');
const db = require('../models');
const List = db.lists;
const Op = db.Sequelize.Op;

//Create
exports.create = (req, res) => {
    if (!req.body.doctor_uid && !req.body.patient_uid) {
        res.status(400).send({
            message: "content can not be empty"
        });
        return;
    }

    const list = {
        patient_uid: req.body.patient_uid,
        patient_name: req.body.patient_name,
        doctor_uid: req.body.doctor_uid
    }

    List.create(list)
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
    const doctor_uid = req.headers.doctor_uid;
    let condition = doctor_uid ? { doctor_uid: { [Op.like]: `%${doctor_uid}%` } } : null;

List.findAll({ where: condition })
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while find user"
        });
    });
};

//get doctor with patient UID
exports.findOne = (req, res) => {
    const patient_uid = req.headers.patient_uid;
    let condition = patient_uid ? { patient_uid: { [Op.like]: `%${patient_uid}%` } } : null;

List.findOne({ where: condition })
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while find user"
        });
    });
};