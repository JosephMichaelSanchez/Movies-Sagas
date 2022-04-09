const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// router.get('/:id', (req, res) => {
//   // Add query to get all genres


//   res.sendStatus(500)
// });

router.get('/:id', (req, res) => {

  const query = `SELECT "genres".name FROM "genres"
  JOIN "movies_genres" ON "genres".id = "movies_genres".genre_id
  JOIN "movies" ON "movies_genres".movie_id = "movies".id
  WHERE "movies".id = $1`;
  const values = [req.params.id]
  pool.query(query, values)
    .then( result => {
      res.send(result.rows);
      console.log(result);
      
    })
    .catch(err => {
      console.log('ERROR: Get movie genres', err);
      res.sendStatus(500)
    })

});





module.exports = router;