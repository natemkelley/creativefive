var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Picture = mongoose.model('Picture');
/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.delete('/pictures/:picture', function (req, res) {
    console.log("in Delete");
    req.comment.remove();
    res.sendStatus(200);
});

router.put('/pictures/:picture/upvote', function (req, res, next) {
    req.comment.upvote(function (err, comment) {
        if (err) {
            return next(err);
        }
        res.json(comment);
    });
});


router.get('/pictures', function (req, res, next) {
    Picture.find(function (err, comments) {
        if (err) {
            return next(err);
        }
        res.json(comments);
    });
});

// router.post('/pictures', function (req, res, next) {
//     var picture = new Picture(req.body);
//     picture.save(function (err, comment) {
//         if (err) {
//             return next(err);
//         }
//         res.json(comment);
//     });
// });
router.post('/pictures', function(req,res,next){
  var picture = new Picture(req.body);
  picture.save(function (err,picture){
    if (err){
      return next(err);
    }
    res.json(picture);
  });
  console.log(req.body);
});

router.param('picture', function (req, res, next, id) {
    var query = Picture.findById(id);
    query.exec(function (err, picture) {
        if (err) {
            return next(err);
        }
        if (!picture) {
            return next(new Error("can't find picture"));
        }
        req.comment = picture;
        return next();
    });
});

router.get('/pictures/:picture', function (req, res) {
    res.json(req.comment);
});





module.exports = router;
