import { request } from "./app/request.js";
import { urlAPIGeo, urlAPIWeather } from "./app/APIs.js";
import { getDayWeek } from "./app/getDayWeek.js"; 
import { handlerDayDOM } from "./app/DOM/handlerDayDOM.js";

const search = document.querySelector(".search");

//Other days
const dayOne = document.getElementById("dayOne");
const dayTwo = document.getElementById("dayTwo");
const dayThree = document.getElementById("dayThree");
const dayFour = document.getElementById("dayFour");

const othersDays = [dayOne, dayTwo, dayThree, dayFour]

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

      const {main, wind, weather} = list[0];

      handlerDayDOM(main, wind, weather);

      for( let i = 1; i <= othersDays.length; i++){
        let number = i * 8;
        
        switch(number){
          case 8:
            const nameWeek = getDayWeek(list[number]);
            const minDay = document.getElementById("min-temp-DayOne");
            const maxDay = document.getElementById("max-temp-DayOne");
          
            const nameDayWeek = dayOne.lastElementChild;
            nameDayWeek.textContent = nameWeek.toUpperCase();
          
            minDay.textContent = Math.floor(list[number].main.temp_min) + "º";
            maxDay.textContent = Math.ceil(list[number].main.temp_max) + "º";

          case 16:
            const nameWeekTwo = getDayWeek(list[number]);
            const minDayTwo = document.getElementById("min-temp-DayTwo");
            const maxDayTwo = document.getElementById("max-temp-DayTwo");

            const nameDayWeekTwo = dayTwo.lastElementChild;
            nameDayWeekTwo.textContent = nameWeekTwo.toUpperCase();

            minDayTwo.textContent = Math.floor(list[number].main.temp_min) + "º";
            maxDayTwo.textContent = Math.ceil(list[number].main.temp_max) + "º";

          case 24:
            const nameWeekThree = getDayWeek(list[number]);
            const minDayThree = document.getElementById("min-temp-DayThree");
            const maxDayThree = document.getElementById("max-temp-DayThree");

            const nameDayWeekThree = dayThree.lastElementChild;1
            nameDayWeekThree.textContent = nameWeekThree.toUpperCase();

            minDayThree.textContent = Math.floor(list[number].main.temp_min) + "º";
            maxDayThree.textContent = Math.ceil(list[number].main.temp_max) + "º";

          case 32:
            const nameWeekFour = getDayWeek(list[number]);
            const minDayFour = document.getElementById("min-temp-DayFour");
            const maxDayFour = document.getElementById("max-temp-DayFour");

            const nameDayWeekFour = dayFour.lastElementChild;
            nameDayWeekFour.textContent = nameWeekFour.toUpperCase();

            minDayFour.textContent = Math.floor(list[number].main.temp_min) + "º";
            maxDayFour.textContent = Math.ceil(list[number].main.temp_max) + "º";

        }
      }
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