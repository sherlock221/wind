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
    res.render("movie/index");
});

router.get("/detail",function(req,res){
    res.render("movie/detail" );
});



module.exports = router;