export function getNumWeek(list){
  const [dataMain] = list[0].dt_txt.split(" ");
  const [year, month, date] = dataMain.split("-");
  const newDate = new Date(year, month, date);
  return newDate.getDay();
}