const key = "0c83da6e21a88bbbd8d6121eaa0e7d1f";

export function urlAPIGeo(city, state, country){
  const url =  `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${key}`;
  return url;
}

export function urlAPIWeather(lat, lon){
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  return url;
}