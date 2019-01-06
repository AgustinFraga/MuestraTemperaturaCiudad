const axios = require('axios')
const clima = require('./clima')
const coordenadas = require('./coordenadas')

const argv = require('yargs')
    .options({

        descripcion: {
            alias: "d",
            demand: true
        }
    })
    .help()
    .argv;

async function principal() {
    try {
        var location = await coordenadas.funcionCoordenadas(encodeURI(argv.descripcion));
        return clima.funcionTemperatura(location);
    } catch {
        throw "ERROR INESPERADO"
    }
}

principal()
    .then(function(temperatura) {
        console.log("La temperatura es de: " + temperatura);
    })
    .catch(function(error) {
        console.log(error);
    })