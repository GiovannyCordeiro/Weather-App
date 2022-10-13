export function updDayOneDOM(list, nameWeek, dayOne){
  const minDay = document.getElementById("min-temp-DayOne");
  const maxDay = document.getElementById("max-temp-DayOne");
          
  const nameDayWeek = dayOne.lastElementChild;
  nameDayWeek.textContent = nameWeek.toUpperCase();
          
  minDay.textContent = Math.floor(list.main.temp_min) + "º";
  maxDay.textContent = Math.ceil(list.main.temp_max) + "º";
  
}