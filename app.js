const argv = require('./config/yargs').argv;
const location = require('./location/location');
const climate = require('./climate/climate');

//location.getLocationLatLng(argv.direccion)
 //                                       .then((rsp) => console.log(rsp));

//climate.getClimate(37.779999, -122.419998)
 //                                       .then((resp) => console.log(resp))
 //                                       .catch(console.log);
                                
const getInfo = async (adress) => {
    try {
        const coords = await location.getLocationLatLng(adress);
        const temp = await climate.getClimate(coords.lat, coords.lng);
        console.log(`La Tª de ${adress}, ronda ahora mismo los ${temp}º`);
    } catch (error) {
        throw new Error(`who let´s the dog out!!!`,error);
    }
}

getInfo(argv.direccion)
                    .then(console.log)
                    .catch(console.log);