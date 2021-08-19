import TimezoneResultType from "@types/TimezoneResultType";

function CheckTimezoneSaved(timezone: string, list: TimezoneResultType[]) {
  for (let timezoneResult of list) {
    if (timezoneResult.name === timezone) {
      return true;
    }
  }

  return false;
}

export default CheckTimezoneSaved;
