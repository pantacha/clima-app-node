const axios = require('axios');

const getLocationLatLng = async (adress) => {
    encodedURL = encodeURI(adress);

    //console.log(encodedURL);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            'x-rapidapi-key': '4e433c9c79msha35b6138e24d589p180e9bjsn855bf2913ae6'
        }
    });

    const location = await instance.get();

    if(location.data.Results.length === 0){
        throw new Error(`no hay ninguna data para la localizacion requerida: ${adress}`);
    }

     //const adr = location.data.Results[0].name;
     //const lat = location.data.Results[0].lat;
     //const lng = location.data.Results[0].lon;

     let {name: adr,lat,lon: lng} = location.data.Results[0];

    return {
        adr,
        lat,
        lng
    }
}

module.exports = {
    getLocationLatLng
}