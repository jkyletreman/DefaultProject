'use strict';

  
      var paginationService = require('../apistrategies/pagination.js');
       var CatImplementation = require('../implementation/CatService.js');
    
var CatData;

        


        module.exports.getCat = function getCat (req, res, next) {
        var args = req.swagger.params;
        CatImplementation.getCat(args, (error, data) => {
            CatData = data;
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
        });
    };
    
                
        


    
                module.exports.putCat = function putCat (req, res, next) {
        var args = req.swagger.params;
        CatImplementation.patchCat(args, (error, data) => {
            CatData = data;
            if (Object.keys(CatData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(CatData[Object.keys(CatData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
        
        


    
            module.exports.postCat = function postCat (req, res, next) {
        var args = req.swagger.params;
        CatImplementation.patchCat(args, (error, data) => {
            CatData = data;
            if (Object.keys(CatData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(CatData[Object.keys(CatData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
            
        


    
        module.exports.patchCat = function patchCat (req, res, next) {
        var args = req.swagger.params;
        CatImplementation.patchCat(args, (error, data) => {
            CatData = data;
            if (Object.keys(CatData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(CatData[Object.keys(CatData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
                
            module.exports.deleteCat = function deleteCat (req, res, next) {
        var args = req.swagger.params;
        CatImplementation.deleteCat(args, (error, data) => {
            CatData = data;
            if (Object.keys(CatData).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                              res.end(JSON.stringify(CatData[Object.keys(CatData)[0]] || {}, null, 2));
            } else {
                res.end();
            }

        });
    };
    


    
                
        
    
