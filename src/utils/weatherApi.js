export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Error: ${response.status}`);
  });
};

export const filterWeatherData = data => {
  const result = {};
  const main = data.main;
  result.city = data.name;
  result.temp = {
    F: Math.round(main.temp),
    C: Math.round(((main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now);
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherType = temperature => {
  if (temperature > 86) {
    return 'hot';
  } else if (temperature >= 66 && temperature < 85) {
    return 'warm';
  } else {
    return 'cold';
  }
};

// weather.temperature.F = data.main.temp);
// weather.temperature.C = Math.round((data.main.temp - 32) * 5/9)};