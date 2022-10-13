import { request } from "./app/request.js";
import { urlAPIGeo, urlAPIWeather } from "./app/APIs.js";
import { getDayWeek } from "./app/getDayWeek.js"; 

import { handlerDayDOM } from "./app/DOM/handlerDayDOM.js";
import { updDayOneDOM } from "./app/DOM/updDayOneDOM.js";
import { updDayTwoDOM } from "./app/DOM/updDayTwoDOM.js";
import { updDayThreeDOM } from "./app/DOM/updDayThreeDOM.js";
import { updDayFourDOM } from "./app/DOM/updDayFourDOM.js";

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
            updDayOneDOM(list[number], nameWeek, dayOne);
          case 16:
            const nameWeekTwo = getDayWeek(list[number]);
            updDayTwoDOM(list[number],nameWeekTwo, dayTwo);
          case 24:
            const nameWeekThree = getDayWeek(list[number]);
            updDayThreeDOM(list[number], nameWeekThree, dayThree);
          case 32:
            const nameWeekFour = getDayWeek(list[number]);
            updDayFourDOM(list[number], nameWeekFour, dayFour);
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