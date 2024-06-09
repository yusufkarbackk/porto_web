var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portofolio/bank_sampah', function (req, res) {
  res.render('bank_sampah')
})

router.get('/portofolio/server_monitoring', function (req, res) {
  res.render('server-monitoring')
})

router.get('/portofolio/gobatik', function (req, res) {
  res.render('gobatik')
})
module.exports = router;
