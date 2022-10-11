export function getDayWeek(list){
  const newDate = new Date(list.dt_txt);
  const [day] = newDate.toString().split(" ");
  return day;
}