import { request } from "./app/request.js";
import { urlAPIGeo, urlAPIWeather} from "./app/APIs.js";
import { getNumWeek } from "./app/numberWeek.js"; 

//DOM
const search = document.querySelector(".search");

const tempDOM = document.querySelector(".temp").firstElementChild;
const minTemp = document.querySelector(".margin-temp").firstElementChild;
const maxTemp = document.querySelector(".margin-temp").lastElementChild;

const velocity = document.getElementById("velocity");
const rain = document.getElementById("rain");
const humidity = document.getElementById("moisture");

search.addEventListener("keyup", (e) => {
  if(e.keyCode === 13){
    const indexFirstDiv = search.innerHTML.indexOf("<div>");
    const valueSearch = search.innerHTML.slice(0, indexFirstDiv);
    search.textContent = valueSearch; 

    const [city, state, country] = splitInputUser(search.textContent);
    const urlGeo = urlAPIGeo(city, state, country);

    async function APIAssignments(){
      const [positionLocal] = await request("GET", urlGeo);
      if(positionLocal === undefined){
        alert("Digite um valor coerente de local")
        search.textContent = ""
      }

      const {lat, lon} = positionLocal;

      const urlWeather = urlAPIWeather(lat, lon);
      const {list} = await request("GET", urlWeather);

      const {main} = list[0];
      const {wind} = list[0];

      console.log(list)

      tempDOM.textContent = Math.trunc(main.temp);
      minTemp.textContent = Math.trunc(main.temp_min) + "º";
      maxTemp.textContent = Math.trunc(main.temp_max) + "º";

      rain.textContent = Math.trunc(wind.gust);
      velocity.textContent = wind.speed;
      humidity.textContent = main.humidity;

      //___
      const numberDate = getNumWeek(list);
    };
    
    APIAssignments();  
  };
});

function splitInputUser(data){
  if(data === ''){
    alert("Put the consistent value");
    return;
  }
  const region = data.split(",");
  return region;
};