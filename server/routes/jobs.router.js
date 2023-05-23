const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// My GET Route for ALL Job Details
router.get('/', (req, res) => {
  // GET route code here
  const queryText = 'SELECT * FROM "Job";';
  pool.query(queryText)
    .then((result) => {
      console.log('In my GET router', result);
      res.send(result.rows);
    }).catch((error) => {
      alert('There is an error in your GET router request', error)
      res.sendStatus(500);
    })
 });

module.exports = router;
