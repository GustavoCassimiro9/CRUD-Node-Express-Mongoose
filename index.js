//Config Inicial 
require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')



//Forma de ler o Json  - Middleweres
app.use(

    express.urlencoded({
        extended: true

    })
    
);


app.use(express.json());

//Rota da API
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

//Rota inicial / End Point
app.get('/',(req,res) => {

    res.json({message: 'Oi express'})

})

//Entregar uma porta para o express



//String connect db : mongodb+srv://gustavocassimiro60:123opala@apicluster.4e9lbst.mongodb.net/bancodaapi?retryWrites=true&w=majority
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.4e9lbst.mongodb.net/bancodaapi?retryWrites=true&w=majority` 

).then(() => {
    console.log('Conectamos ao MongoDB');
    app.listen(3000);

}).catch((err) => console.log(err))
//1rAcsN0VxmBrrhtH