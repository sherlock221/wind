/**
 * 起风了电影
 * abjia
 * @type {*|exports}
 */

var express = require('express');
var router = express.Router();

/**
 * 起风了
 */
router.get("/index",function(req,res){
    var cateLogId = 0;
    res.render("movie/index",{
        cateLogId : cateLogId
    });
});

router.get("/detail",function(req,res){
    var cateLogId = 0;
    res.render("movie/detail", {
        cateLogId: cateLogId
    } );
});



module.exports = router;