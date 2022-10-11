const tempDOM = document.querySelector(".temp").firstElementChild;
const minTemp = document.querySelector(".margin-temp").firstElementChild;
const maxTemp = document.querySelector(".margin-temp").lastElementChild;

const velocity = document.getElementById("velocity");
const rain = document.getElementById("rain");
const humidity = document.getElementById("moisture");

export function handlerDayDOM(main, wind){
  tempDOM.textContent = Math.trunc(main.temp);
  minTemp.textContent = Math.trunc(main.temp_min) + "º";
  maxTemp.textContent = Math.trunc(main.temp_max) + "º";

  rain.textContent = Math.trunc(wind.gust);
  velocity.textContent = wind.speed;
  humidity.textContent = main.humidity;
}