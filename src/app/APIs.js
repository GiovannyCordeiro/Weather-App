const key = "caaf11d7ca47b7d66e3f097135c0d685";

export function urlAPIGeo(city, state, country){
  const url =  `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${key}`;
  return url;
}

export function urlAPIWeather(lat, lon){
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  return url;
}