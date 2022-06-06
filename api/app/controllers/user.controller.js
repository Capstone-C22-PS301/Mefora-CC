const { route } = require('express/lib/router');
const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;

//Create
exports.create = (req, res) => {
    if(!req.body.UID){
        res.status(400).send({
            success: false,
            message: "content can not be empty"
        });
        return;
    }

    const user = {
        UID: req.body.UID,
        name: req.body.name,
        nickname: req.body.nickname,
        address: req.body.address,
        birth: req.body.birth,
        status: req.body.status ? req.body.status : false
    }

    User.create(user)
        .then((data) => {
            if(data) {
                res.send({
                    success: true,
                    message: "User was created successfully"
                });
            } else {
                res.send({ 
                    success: false,
                    message: "Cannot create user" 
                });
            }
        }).catch((err) => {
            res.status(500).send({ 
                message: 
                    err.message || "Some error occurred while creating User"
                });
        });

};

//Retrieve all
exports.findAll = (req, res) => {
    const name =  req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    
    User.findAll({ where: condition })
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
    const UID = req.headers.token_uid;

    User.findByPk(UID)
        .then((data) =>{
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: "Error retrieving user with id=" + UID
            });
        });
};

//Update a User with UID
exports.update = (req, res) => {
    const UID = req.headers.token_uid;

    User.update(req.body, {
        where: {UID: UID}
    }).then((result) => {
        if( result) {
            res.send({
                success: true,
                message: "User was update successfully"
            });
        } else {
            res.send({ message: "Cannot update user with uid" + UID})
        }
    }).catch((err) => {
        res.status(500).send({ 
            message: "error updating user with uid=" + UID
        })
    });
};

//Delete a User with UID
exports.delete = (req, res) => {
    const UID = req.headers.token_uid;

    User.destroy({
        where: {UID: UID}
    }).then((result) => {
        if( result == 1) {
            res.send({
                success: true,
                message: 'User was deleted successfully'
            })
        } else {
            res.send({
                message: 'Cannot delete user with id ' + UID
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: 'error deleting with id ' + UID
        })
    });

};

//Delete all
exports.DeleteAll = (req, res) => {
    
};

//Find all published
exports.findAllPublished = (req, res) => {

};

