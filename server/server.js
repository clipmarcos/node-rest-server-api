// variable del puerto
require('./config/config');

const express = require('express');
const app = express();


const bodyParser = require('body-parser')
    //******************************************** */
    // app.use esto nos indica que son un middleware: son unas funciones que se van a disparar siempre
    // cada vez que hagamos peticiones y siempre van a pasar por estas 2 lineas de codigos
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
    // ***********************************************



app.get('/usuario', function(req, res) {
    res.json('Get usuario con ñandú')
})

app.post('/usuario', function(req, res) {
    let body = req.body;



    if (body.nombre === '') {

        res.status(400).json({
            error: false,
            messages: 'El campo nombre es requerido.'
        })

    } else {

        res.json({
            users: body
        })
    }

})

app.put('/usuario', function(req, res) {
    res.json('Put usuario con ñandú')
})

app.delete('/usuario', function(req, res) {
    res.json('Delete usuario con ñandú')
})

app.listen(process.env.PORT, () => {
    console.log('Server on port : ', process.env.PORT);

})