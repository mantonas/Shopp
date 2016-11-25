/**
 * Created by MANO on 2016.11.23.
 */
var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/Shopp');

var products = [
    new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/lt/c/c0/Doom3dezute.jpg',
    title: 'DOOM 3',
    description: 'Brand new video game',
    price: 30
}),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/lt/4/41/Codbox.jpg',
        title: 'Call Of Duty',
        description: 'Brand new video game',
        price: 20
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/lt/d/d1/Call_of_Duty_2_Box.jpg',
        title: 'Call Of Duty 2',
        description: 'Brand new video game',
        price: 20
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/lt/f/f1/Cod3_box.jpg',
        title: 'Call Of Duty 3',
        description: 'Brand new video game',
        price: 20
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/lt/5/5f/Call_of_Duty_4_Modern_Warfare.jpg',
        title: 'Call Of Duty 4:Modern Warfare',
        description: 'Brand new video game',
        price: 50
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/lt/c/c2/Call_of_Duty_5_cover_art.PNG',
        title: 'Call Of Duty 5',
        description: 'Brand new video game',
        price: 20
    }),


];
var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
         done++
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
