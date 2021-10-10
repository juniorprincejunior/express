const express = require('express')

const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.set('views', './views')

app.set('view engine', 'ejs')





    const today = new Date()
    const hours = today.getHours()
    const day = today.getDay()
    console.log(day);





function geturl(url) {

    app.get('/' + url, function(req, res){
      var name = req.params.name;
      res.render(url);
    });
  
  };

  


if((day!=0 || day !=6) && (hours<17 && hours>9) ){
    app.get('/', (req, res) =>{
        res.render('home'),
        geturl('home'),
        geturl('about'),
        geturl('contact')
    })
}
else(
    app.get('/', (req, res) =>{
        res.render('error')
    })
     
)
app.listen(PORT, ()=>{
    console.log(`le serveur  marche au port ${PORT}`);
})