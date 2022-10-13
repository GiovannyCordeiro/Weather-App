export function updDayFourDOM(list, nameWeekFour, dayFour){
  const minDayFour = document.getElementById("min-temp-DayFour");
  const maxDayFour = document.getElementById("max-temp-DayFour");

  const nameDayWeekFour = dayFour.lastElementChild;
  nameDayWeekFour.textContent = nameWeekFour.toUpperCase();

  minDayFour.textContent = Math.floor(list.main.temp_min) + "º";
  maxDayFour.textContent = Math.ceil(list.main.temp_max) + "º";
}