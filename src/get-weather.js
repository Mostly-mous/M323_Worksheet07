const APIKey = "fca363e2524e2c7236dd33d4c99b12f1";

const fetchWeatherInfo = async (location) => {
    const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIKey}`);

    if (!geoResponse.ok) {
        throw new Error("An Error occured while searching for the specified location");
    }

    const locData = await geoResponse.json();

    if (!locData.length) {
        throw new Error("Location not found");
    }

    const lat = locData[0].lat;
    const lon = locData[0].lon;

    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`);

    if (!weatherResponse.ok) {
        throw new Error("An Error occured while fetching weather data");
    }

    const weatherData = await weatherResponse.json();

    return {
        temp: weatherData.main.temp,
        high: weatherData.main.temp_max,
        low: weatherData.main.temp_min
    }

}


module.exports = fetchWeatherInfo;