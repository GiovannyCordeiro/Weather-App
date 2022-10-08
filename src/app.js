import { request } from "./app/request.js";
import { urlAPIGeo } from "./app/APIs.js";

//test variables
const countryName = "Brazil";
const cityName = "Joao Pessoa";
const stateName = "Paraiba";

//DOM
const search = document.querySelector(".search");

search.addEventListener("keyup", (e) => {
  if(e.keyCode === 13){
    const indexFirstDiv = search.innerHTML.indexOf("<div>");
    const valueSearch = search.innerHTML.slice(0, indexFirstDiv);
    search.textContent = valueSearch; 

    const [city, state, country] = splitInputUser(search.textContent);
    const urlGeo = urlAPIGeo(city, state, country);

    async function receivePosition(){
      const positionLocal = await request("GET", urlGeo);
      console.log(positionLocal);
      //--
    };
    
    receivePosition();  
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