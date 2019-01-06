const axios = require('axios')

async function temperatura(ubicacion) {
    temp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ubicacion.lat}35&lon=${ubicacion.lng}&appid=e5b8c9a7376f2a69b9498ffe7603a741&units=metric`)
    return temp.data.main.temp;
}




module.exports = {
    funcionTemperatura: temperatura
}