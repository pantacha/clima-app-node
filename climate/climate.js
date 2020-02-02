const axios = require('axios');

const getClimate = async (lat, lon) => {
    const climate = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c18ca9c7460e362e8a4d6f25ebc99978&units=metric`);

    return climate.data.main.temp;
}

module.exports = {
    getClimate
}