function GetTime(unixtime : number) : string {
  let hours, seconds, minutes;
  const realDate = new Date(unixtime * 1000);

  hours = realDate.getHours();
  seconds = realDate.getSeconds();
  minutes = realDate.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${minutes}:${seconds}`;
}

export default GetTime;