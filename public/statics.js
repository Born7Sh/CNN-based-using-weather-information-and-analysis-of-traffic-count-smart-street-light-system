const express = require('express');
const Weather = require('../models/weather');
var router = express.Router();

// router.route('/').get(async(req,res,next) => {
//     try{
//         const weather = await Weather.findAll();
//         res.json(weather);
//     }catch(err){
//         console.err(err);
//         next(err);
//     }
// })

router.get('/', function(req, res, next) { 
  Weather.find({where:{id:1}}) 
  .then((user) => { 
    res.render('index', { 
      title: 'Express', temperature: Weather.temperature
    }); 
  }); 
});

// router.get('/weather', async(req, res, next) =>{
//   try{
//     const weather = await Weather.findAll();  
//     res.render('userManager', {weather});
//   } catch(error) {
//     console.error(error);
//     next(error);
//   }

// });
