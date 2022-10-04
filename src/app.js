const url = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={afce42271afc999070f2c2ae65d6a47b}"

function requestForAPI(){
  return new Promise((resolve, reject) => {
    const xml = new XMLHttpRequest();
    xml.open("GET",url);
    xml.responseType = "json";
    xml.onload = () => {
      resolve(xml.response)
    }
    xml.send();
  })
}

requestForAPI().then((data) => {
  console.log(data)
})