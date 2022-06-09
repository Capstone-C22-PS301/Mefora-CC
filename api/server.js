const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./app/models')


const app = express();

let whitelist = [
    'http://localhost:8081',
    'https://capstone-food.et.r.appspot.com/'
];
let corsOption = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Sync database
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to MEFORA API Backend"
    });
});

//user routes
require("./app/routes/user.routes")(app);
//list routes
require("./app/routes/list.routes")(app);
//disease routes
require("./app/routes/disease.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});