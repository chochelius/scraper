const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 8000

const app = express()


const url = 'https://www.superzoo.cl/catalogo/perro/alimentos'

axios(url)
    .then(response => {
        const datos = response.data

        const $ = cheerio.load(datos);

        const resultado =  $('script') 

        console.log(resultado)
        

    })
    

app.listen(PORT, () => console.log('server arriba'))