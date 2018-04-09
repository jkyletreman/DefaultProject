'use strict';

  
      var paginationService = require('../apistrategies/pagination.js');
       var CatsImplementation = require('../implementation/CatsService.js');
    
var CatsData;

        


        module.exports.getCats = function getCats (req, res, next) {
        var args = req.swagger.params;
        CatsImplementation.getCats(args, (error, data) => {
            CatsData = data;
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
        });
    };
    
                
        


    
                module.exports.putCats = function putCats (req, res, next) {
        var args = req.swagger.params;
        CatsImplementation.patchCats(args, (error, data) => {
            CatsData = data;
            if (Object.keys(CatsData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(CatsData[Object.keys(CatsData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
        
        


    
            module.exports.postCats = function postCats (req, res, next) {
        var args = req.swagger.params;
        CatsImplementation.patchCats(args, (error, data) => {
            CatsData = data;
            if (Object.keys(CatsData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(CatsData[Object.keys(CatsData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
            
        


    
        module.exports.patchCats = function patchCats (req, res, next) {
        var args = req.swagger.params;
        CatsImplementation.patchCats(args, (error, data) => {
            CatsData = data;
            if (Object.keys(CatsData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(CatsData[Object.keys(CatsData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
                
            module.exports.deleteCats = function deleteCats (req, res, next) {
        var args = req.swagger.params;
        CatsImplementation.deleteCats(args, (error, data) => {
            CatsData = data;
            if (Object.keys(CatsData).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                              res.end(JSON.stringify(CatsData[Object.keys(CatsData)[0]] || {}, null, 2));
            } else {
                res.end();
            }

        });
    };
    


    
                
        
    
