 const express = require("express")
 
 const data = require('./MOCK_DATA.json')

 const app = express()

 app.use('/random-country', (req, res) => {
    const { country_name } = data[Math.round(MAth.random() * data.length)] 
    return res.json({ country_name })
 });  


 app.listen(8080, () => console.log('make sure its listening... '))
