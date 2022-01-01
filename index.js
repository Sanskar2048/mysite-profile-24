if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine' , 'ejs')
app.set('views', __dirname+'/views')
app.use(express.static(__dirname + '/public'));
app.set('layout', 'layout');
app.use(expressLayouts)
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}))


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true})
const db = mongoose.connection
db.on('error' ,error => console.error(error))
db.once('open', () =>console.log('connected to mongoose'))
console.log('name')


const homeRouter = require('./routers/home')
app.use('/home',homeRouter)
const editRouter = require('./routers/edit')
app.use('/edit',editRouter)

app.listen(process.env.PORT || 9000, ()=>{ console.log('http://localhost:9000/home')}) 