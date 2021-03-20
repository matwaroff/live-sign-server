var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// const db = new sqlite3.Database(":memory:", err => {
//   if(err) {
//     return console.error(err.message);
//   }
//   console.log("Connected to the in-memory SQlite db.");
// });

let status = false;

router.get('/on', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  status = true;
  res.json({
    status
  })
});
router.get('/off', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  status = false;
  res.json({
    status
  })
});
router.get('/toggle', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  status = !status;
  res.json({
    status
  })
});
router.get('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    status
  })
})

module.exports = router;
