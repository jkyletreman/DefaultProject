'use strict';
/*
* This file will not be changed by the generator
*/
var CatsData = {};
var CatsFD = require('../../sampleData/v1/Cats.json');
CatsData = CatsFD;



exports.getCats = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    cb(null, CatsData);
}





exports.putCats = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CatsData).length > 0) {
        cb(null, CatsData[Object.keys(CatsData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.postCats = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CatsData).length > 0) {
        cb(null, CatsData[Object.keys(CatsData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.patchCats = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CatsData).length > 0) {
        cb(null, CatsData[Object.keys(CatsData)[0]]);
    }
    else {
        cb(null, {})
    }
}



exports.deleteCats = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CatsData).length > 0) {
        cb(null, CatsData[Object.keys(CatsData)[0]]);
    }
    else {
        cb(null, {})
    }
}


