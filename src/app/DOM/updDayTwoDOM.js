export function updDayTwoDOM(list, nameWeekTwo, dayTwo){
  const minDayTwo = document.getElementById("min-temp-DayTwo");
  const maxDayTwo = document.getElementById("max-temp-DayTwo");

  const nameDayWeekTwo = dayTwo.lastElementChild;
  nameDayWeekTwo.textContent = nameWeekTwo.toUpperCase();

  minDayTwo.textContent = Math.floor(list.main.temp_min) + "º";
  maxDayTwo.textContent = Math.ceil(list.main.temp_max) + "º";
}