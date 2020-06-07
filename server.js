const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article');
const articlesRoute = require('./routes/articles');
const path =  require('path');
const methodOverride = require('method-override');

const app = express();
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true , useUnifiedTopology: true })

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}))

app.use('/articles', articlesRoute);

app.get('/',async(req,res)=>{
    const articles = await Article.find().sort({date:'desc'})
    res.render('articles/index',{articles : articles});
});

app.listen(3000);
