export const weatherOptions = [
  {
    day: true,
    condition: 'clear',
    url: new URL('../assets/day/clear-day.png', import.meta.url).href,
  },
  {
    day: true,
    condition: 'clouds',
    url: new URL('../assets/day/cloudy-day.png', import.meta.url).href,
  },
  {
    day: true,
    condition: 'mist',
    url: new URL('../assets/day/fog-day.png', import.meta.url).href,
  },
  {
    day: true,
    condition: 'rain',
    url: new URL('../assets/day/rain-day.png', import.meta.url).href,
  },
  {
    day: true,
    condition: 'snow',
    url: new URL('../assets/day/snow-day.png', import.meta.url).href,
  },
  {
    day: true,
    condition: 'thunderstorm',
    url: new URL('../assets/day/storm-day.png', import.meta.url).href,
  },
  {
    day: false,
    condition: 'clear',
    url: new URL('../assets/night/clear-night.png', import.meta.url).href,
  },
  {
    day: false,
    condition: 'clouds',
    url: new URL('../assets/night/cloudy-night.png', import.meta.url).href,
  },
  {
    day: false,
    condition: 'mist',
    url: new URL('../assets/night/fog-night.png', import.meta.url).href,
  },
  {
    day: false,
    condition: 'rain',
    url: new URL('../assets/night/rain-night.png', import.meta.url).href,
  },
  {
    day: false,
    condition: 'snow',
    url: new URL('../assets/night/snow-night.png', import.meta.url).href,
  },
  {
    day: false,
    condition: 'thunderstorm',
    url: new URL('../assets/night/storm-night.png', import.meta.url).href,
  },
];

export const coordinates = {
  latitude: 34.143559,
  longitude: -118.395248,
};

export const APIkey = '035a112474478a3b64beab9f42f2aa0c';
