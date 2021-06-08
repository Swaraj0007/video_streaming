const express = require('express');
const fs = require('fs');
const app = express();

app.get('/cooking', (req,res)=>{
    fs.readFile('./cooking.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/cooking_img', (req,res)=>{
    fs.readFile('./cooking.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});


app.get('/dancing', (req,res)=>{
    fs.readFile('./dancing.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/dancing_img', (req,res)=>{
    fs.readFile('./dancing.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});



app.get('/sports', (req,res)=>{
    fs.readFile('./sports.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/sports_img', (req,res)=>{
    fs.readFile('./sports.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});


app.get('/exercise', (req,res)=>{
    fs.readFile('./exercise.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/exercise_img', (req,res)=>{
    fs.readFile('./exercise.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});


app.get('/learning', (req,res)=>{
    fs.readFile('./learning.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/learning_img', (req,res)=>{
    fs.readFile('./learning.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});


app.get('/driving', (req,res)=>{
    fs.readFile('./driving.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/driving_img', (req,res)=>{
    fs.readFile('./driving.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});

app.listen('9000',()=>{
    console.log('Server running');
});