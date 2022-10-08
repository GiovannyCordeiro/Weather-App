export function request(method, url, data){
  return new Promise((resolve, reject) => {
    const xml = new XMLHttpRequest();
    xml.open(method, url);
    xml.responseType = "json";
    xml.onload = () => {
      resolve(xml.response)
    }
    xml.send( data );
  })
}