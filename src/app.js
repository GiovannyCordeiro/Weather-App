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

      const {main} = list[0];
      const {wind} = list[0];

      handlerDayDOM(main, wind);

      for( let i = 1; i <= othersDays.length; i++){
        let number = i * 8;
        
        switch(number){
          case 8:
            const nameDayWeek = dayOne.lastElementChild;
            const nameWeek = getDayWeek(list[number]);
            nameDayWeek.textContent = nameWeek.toUpperCase();

            const minDay = document.getElementById("min-temp-DayOne");
            const maxDay = document.getElementById("max-temp-DayOne");
            minDay.textContent = Math.trunc(list[number].main.temp_min);
            maxDay.textContent = Math.trunc(list[number].main.temp_max);

          case 16:
            const nameDayWeekTwo = dayTwo.lastElementChild;
            const nameWeekTwo = getDayWeek(list[number]);
            nameDayWeekTwo.textContent = nameWeekTwo.toUpperCase();

            const minDayTwo = document.getElementById("min-temp-DayTwo");
            const maxDayTwo = document.getElementById("max-temp-DayTwo");
            minDayTwo.textContent = Math.trunc(list[number].main.temp_min);
            maxDayTwo.textContent = Math.trunc(list[number].main.temp_max);

          case 24:
            const nameDayWeekThree = dayThree.lastElementChild;
            const nameWeekThree = getDayWeek(list[number]);
            nameDayWeekThree.textContent = nameWeekThree.toUpperCase();

            const minDayThree = document.getElementById("min-temp-DayThree");
            const maxDayThree = document.getElementById("max-temp-DayThree");
            minDayThree.textContent = Math.trunc(list[number].main.temp_min);
            maxDayThree.textContent = Math.trunc(list[number].main.temp_max);

          case 32:
            const nameDayWeekFour = dayFour.lastElementChild;
            const nameWeekFour = getDayWeek(list[number]);
            nameDayWeekFour.textContent = nameWeekFour.toUpperCase();

            const minDayFour = document.getElementById("min-temp-DayFour");
            const maxDayFour = document.getElementById("max-temp-DayFour");
            minDayFour.textContent = Math.trunc(list[number].main.temp_min);
            maxDayFour.textContent = Math.trunc(list[number].main.temp_max);

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