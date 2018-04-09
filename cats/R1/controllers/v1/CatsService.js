'use strict';
  var CatsFD = require('../../sampleData/v1/Cats.json');
  var CatsData = CatsFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getCats = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(CatsData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, CatsData).then(function(result) {
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





exports.putCats = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(CatsData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(CatsData[Object.keys(CatsData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postCats = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(CatsData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(CatsData[Object.keys(CatsData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchCats = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(CatsData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(CatsData[Object.keys(CatsData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteCats = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(CatsData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(CatsData[Object.keys(CatsData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


