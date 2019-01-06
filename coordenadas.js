const axios = require('axios')

async function coordenadas(lugarBuscar) {

    let variable = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${lugarBuscar}&key=AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA`);
    return variable.data.results[0].geometry.location;

}


module.exports = {
    funcionCoordenadas: coordenadas
}