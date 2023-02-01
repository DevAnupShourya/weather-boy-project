// ! for backend only

// * Importing packages
const express = require('express');
const app = express();
// ? Variables
const port = process.env.PORT ||  8000;

app.get('/' , (req , res) => {
    res.send('Welcome Home Page');
})
app.get('/about' , (req , res) => {
    res.send('Welcome About Page');
})
app.get('/weather' , (req , res) => {
    res.send('Welcome weather Page');
})
app.get('*' , (req , res) => {
    res.send('404 Page!!');
})

app.listen(port, () => {
    console.log(`listening in port ${port}.......`);
} )