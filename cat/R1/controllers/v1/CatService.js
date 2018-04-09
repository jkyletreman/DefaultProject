'use strict';
  var CatFD = require('../../sampleData/v1/Cat.json');
  var CatData = CatFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getCat = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(CatData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, CatData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putCat = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(CatData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(CatData[Object.keys(CatData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postCat = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(CatData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(CatData[Object.keys(CatData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchCat = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(CatData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(CatData[Object.keys(CatData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteCat = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(CatData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(CatData[Object.keys(CatData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


