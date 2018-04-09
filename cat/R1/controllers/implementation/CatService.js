'use strict';
/*
* This file will not be changed by the generator
*/
var CatData = {};
var CatFD = require('../../sampleData/v1/Cat.json');
CatData = CatFD;



exports.getCat = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    cb(null, CatData);
}





exports.putCat = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CatData).length > 0) {
        cb(null, CatData[Object.keys(CatData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.postCat = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CatData).length > 0) {
        cb(null, CatData[Object.keys(CatData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.patchCat = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CatData).length > 0) {
        cb(null, CatData[Object.keys(CatData)[0]]);
    }
    else {
        cb(null, {})
    }
}



exports.deleteCat = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CatData).length > 0) {
        cb(null, CatData[Object.keys(CatData)[0]]);
    }
    else {
        cb(null, {})
    }
}


