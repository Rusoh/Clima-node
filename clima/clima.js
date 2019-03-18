const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=45e01f844e22dab81dbdfdc3bfb1ac84&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}