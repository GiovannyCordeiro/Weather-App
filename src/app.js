import { request } from "./app/request.js";
import { urlAPIGeo, urlAPIWeather} from "./app/APIs.js";
import { getNumWeek } from "./app/numberWeek.js"; 

//DOM
const search = document.querySelector(".search");

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
      //__

      const numberDate = getNumWeek(list);
      console.log(numberDate)
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