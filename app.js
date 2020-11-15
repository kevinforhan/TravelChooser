 const express = require("express")
 const path = require('path')
 const data = require('./MOCK_DATA (2).json')

 const app = express()

 app.set('views', path.join(__dirname, 'views'));  
 app.set('view engine', 'hbs'); 
 app.use(express.static('public')); 
 
 app.use('/random-country', (req, res) => {
    const { country_name } = data[Math.round(Math.random() * data.length)];
    const { time_zone } = data[Math.round(Math.random() * data.length)];
    return res.json({country_name, time_zone})
 });  

  app.use('/', (req, res) => {
     return res.render('index')
 })

 app.listen(8080, () => console.log('are you not entertained... ', data[1]))