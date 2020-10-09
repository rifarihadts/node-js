const express = require('express')

const app = express()

app.set('view engine','ejs')

app.get('/about', (req,res) => {
    console.log(req.query)
    res.send({success:true,keyword:req.query.keyword})
})

app.get('/txt-response', (req, res) => {
    res.send('Hello world')
})

app.get('/product/:productId', (req,res, next) => {
    console.log(req.params)
    res.send('success')
})

app.get('/category/:productCategory/product/:productId',(req,res, next) =>{
    res.send(req.params)
})

app.get('/error', (req, res, next) => {
    next(new Error('contoh error'))
})

app.get('/multi-handler', (req,res, next) => {
    if(req.query.keyword === 'satu'){
        return next()
    }
    return res.send('keyword harus satu')
}, function (req,res, next) {
    //handle request
    res.send('Sukses')
})

app.get('/index',(req, res, next) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/pdf', (req, res, next) => {
    res.download(__dirname + '/tesfile.pdf','Testing-nodejs.pdf')
})

app.get('/pelatihan', (req, res)=>{
    res.render('index', {subBab: req.query.subBab})
})

app.use((err,req,res, next) =>{
    console.error(err)
    res.send('terjadi eror')
})


app.listen(3000, function(){
    console.log('App listen on port 3000')
})
