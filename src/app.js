// * Importing packages
const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
// ? Variables
const port = process.env.PORT ||  8000;

// ? path of dist folder
const path_of_dist_folder = path.join(__dirname , '../dist');
const path_of_new_views_folder = path.join(__dirname , '../templates/views');
const path_of_partials_folder = path.join(__dirname , '../templates/partials');

app.set('view engine' , 'hbs');
app.use(express.static(path_of_dist_folder));
// ? hence i changed the path of views folder
app.set('views' , path_of_new_views_folder)

hbs.registerPartials(path_of_partials_folder)


// ? Routing
app.get('/' , (req , res) => {
    // res.send('Welcome Home Page');
    res.render('index');
})
app.get('/about' , (req , res) => {
    // res.send('Welcome About Page');
    res.render('about');
})
app.get('/weather' , (req , res) => {
    // res.send('Welcome weather Page');
    res.render('weather');
})
app.get('*' , (req , res) => {
    // res.send('404 Page!!');
    res.render('404');
})

app.listen(port, () => {
    console.log(`listening in port ${port}.......`);
} )