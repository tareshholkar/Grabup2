var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*
//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));
*/


var users =[
    {
        id: 1,
        first_name: 'akash',
        last_name: ' pawar',
        email: 'pawar@gmail.com'
    },
    {
        id: 2,
        first_name: 'nikhil',
        last_name: ' verma',
        email: 'verma@gmail.com'
    },
    {
        id: 3,
        first_name: 'ayush',
        last_name: ' sharma',
        email: 'sharma@gmail.com'
    }
    
    
]


app.get('/', function(req, res){
    
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.post('/users/add', function(req, res){
    var newUser ={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    console.log(newUser);
});
 
app.listen(8080, function(){
    console.log('Server Started on Port 3000...');
})