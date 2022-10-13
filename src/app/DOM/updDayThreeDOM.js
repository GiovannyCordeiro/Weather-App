export function updDayThreeDOM(list, nameWeekThree, dayThree){
  const minDayThree = document.getElementById("min-temp-DayThree");
  const maxDayThree = document.getElementById("max-temp-DayThree");

  const nameDayWeekThree = dayThree.lastElementChild;1
  nameDayWeekThree.textContent = nameWeekThree.toUpperCase();

  minDayThree.textContent = Math.floor(list.main.temp_min) + "º";
  maxDayThree.textContent = Math.ceil(list.main.temp_max) + "º";
}