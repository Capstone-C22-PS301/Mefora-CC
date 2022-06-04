const { route } = require('express/lib/router');
const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;

//Create
exports.create = (req, res) => {
    if(!req.body.name){
        res.status(400).send({
            message: "content can not be empty"
        });
        return;
    }

    const user = {
        name: req.body.name,
        address: req.body.address,
        age: req.body.age,
        published: req.body.published ? req.body.published : false
    }

    User.create(user)
        .then((data) => {
            res.send(data);
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
    const id = req.params.id;

    User.findByPk(id)
        .then((data) =>{
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: "Error retrieving user with id=" + id
            });
        });
};

//Update a User with ID
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: {id: id}
    }).then((result) => {
        if( result==1) {
            res.send({
                message: "User was update successfully"
            });
        } else {
            res.send({ message: "Cannot update user with id" + id})
        }
    }).catch((err) => {
        res.status(500).send({ 
            message: "error updating user with id=" + id
        })
    });
};

//Delete a User with ID
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: {id: id}
    }).then((result) => {
        if( result == 1) {
            res.send({
                message: 'User was deleted successfully'
            })
        } else {
            res.send({
                message: 'Cannot delete user with id ' + id
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: 'error deleting with id ' + id
        })
    });

};

//Delete all
exports.DeleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    }).then((result) => {
        res.send({
            message: `${result} User delete successfully`
        }); 
    }).catch((err) => {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting'
        });
    });
};

//Find all published
exports.findAllPublished = (req, res) => {

};

