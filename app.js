const express = require ('express')
const hbs = require('hbs')

var app = express();
app.set('view engine','hbs')

var bodyParser = require('body-parser');
const { Console } = require('console');
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/list',(rep,res)=>{
    var ds = [];
    ds.push({id: 1, name:'phone', price:300});
    ds.push({id: 2, name:'iphone', price:3000});
    ds.push({id: 3, name:'samsungphone', price:3002});
    res.render('all',{danhsach:ds})
})

app.post('/insert',(rep,res)=>{
    var nameInput = rep.body.txtName;
    var priceInput = rep.body.txtPrice;
    if(nameInput.length < 6 ) {
        res.render('new',{nameError:'ten k nho hon 5 ki tu!'})
    }else{
        res.render('saveDone',{name:nameInput,price:priceInput})
    }
    
})

app.get('/new',(rep,res)=>{
    res.render('new')
})

app.get('/', (req,res)=>{
    res.render('index',{name: 'phamducminh', school:"fpt"})
})

var PORT = process.env.PORT || 5000
app.listen(PORT);
console.log("server is running at " + PORT)