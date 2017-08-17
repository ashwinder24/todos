const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({extended: true}))

const todos =[
    "study",
    "gym",
    "laundry",
    "cooking" 
];

const done=[];

app.get('/',function(req,res){
    res.render('index', {todos:todos,done:done});
});
app.post('/todo',function(req,res){
    var newTask = req.body.todolist;
    todos.push(newTask);
    res.redirect('/');
})
app.post('/done',function(req,res){
    var taskDone = req.body.done;
    done.push(taskDone);
    var i = todos.indexOf(taskDone);
    todos.splice(i,1);
    res.redirect('/');
})
app.listen(3000,function(){
   console.log("server started") 
});

