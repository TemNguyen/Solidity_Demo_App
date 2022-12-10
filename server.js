var express = require("express");

var app = express();
app.use(express.static("./public"));
app.use("/scripts", express.static(__dirname + "/node_modules/web3.js-browser/build/"))
app.set("view engine", "ejs");
app.set("views", "./views");


var server = require("http").Server(app);

var io = require("socket.io")(server);

server.listen(3000);




var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended:false
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://solidity-user-01:k378lgVvlsUW5OEU@realmcluster.xiewz.mongodb.net/minigame?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
    if (err) {
        console.log("Mongo connected error!");
    } else {
        console.log("Mongo connected success!");
    }
});



var controller = require("./controllers/game");
controller(app);
