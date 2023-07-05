var express = require('express');
var router = express.Router();
//recuperer tous les films
const API_KEY = porcess.env.API_KEY

router.get('/movies',(req,res)=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data =>{
        res.json({movies:data.results})
      })
})



module.exports = router;
