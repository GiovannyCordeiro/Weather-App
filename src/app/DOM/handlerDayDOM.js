const tempDOM = document.querySelector(".temp").firstElementChild;
const minTemp = document.querySelector(".margin-temp").firstElementChild;
const maxTemp = document.querySelector(".margin-temp").lastElementChild;
const finalPhrHeader = document.getElementById("finalPhrHeader");
const imageMain = document.getElementById("image-main");

const velocity = document.getElementById("velocity");
const rain = document.getElementById("rain");
const humidity = document.getElementById("moisture");

export function handlerDayDOM(main, wind, weather){
  if(weather[0].description === "few clouds"){
    imageMain.src = "./assets/icons/wi-cloudy.svg";
  }

  tempDOM.textContent = Math.floor(main.temp);
  minTemp.textContent = Math.floor(main.temp_min) + "º";
  maxTemp.textContent = Math.ceil(main.temp_max) + "º";

  rain.textContent = Math.trunc(wind.gust);
  velocity.textContent = wind.speed;
  humidity.textContent = main.humidity;

  finalPhrHeader.textContent = `is with ${weather[0].description}.`;
}