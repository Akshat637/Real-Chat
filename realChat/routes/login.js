const express = require('express');

const router = express.Router();

router.get('/login',(req, res, next) =>{
    res.send(`<form action="/" onsubmit="localStorage.setItem('username', document.getElementById('username').value)"  method="POST">
    <input id="message" type="text"placeHolder="message" name"message">
    <input type="hidden" name="username" id="username">
    <button type="submit">login</button>
    </form>`);
    

})

router.post('/product',(req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
})



module.exports = router;