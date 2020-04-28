// filename: index.js

// import express
let express = require("express");

// import router
let dataSiswa = require("./dataSiswa");

// initialize app
let app = express();

// setup server port
var port = process.env.PORT || 8080;

// send message or default URL
app.get('/', (req, res) => res.send('Selamat Datang Di Data Center Siswa Indonesia'));

// app routes
app.use('/DataSiswa', dataSiswa);

// launch app to listen specified PORT
app.listen(port, function(){
    console.log("Running on port " + port);
})
