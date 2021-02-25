function GetDate(unixtime : number) : string {
  let day, year, month;
  const realDate = new Date(unixtime * 1000);

  day = realDate.getDay();
  month = realDate.getMonth();
  year = realDate.getFullYear();

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  return `${year}/${month}/${day}`;
}

export default GetDate;