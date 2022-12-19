import helper from "../helper/helper";

const setCityCelcius = ({ value = null, element = null }) => {
  element.setAttribute("city", `${value.sys.cityName}`);
  element.setAttribute("cityCode", `${value.sys.country}`);
  element.setAttribute("celcius", `${value.main.temp | 0}`);
};

const setForecast = ({ value = null, element = null, icon = null }) => {
  element.setAttribute("main", `${value.weather.main}`);
  element.setAttribute("desc", `${helper.capitalizeFirst(value.weather.desc)}`);
  element.setAttribute("icon", `${icon}`);
  element.setAttribute("humidity", `${value.main.humidity}`);
  element.setAttribute("windSpd", `${value.main.windSpd}`);
};

const setSunriseSunset = ({ value = null, element = null }) => {
  element.setAttribute("sunrise", `${helper.convertUnix(value.sys.sunrise)}`);
  element.setAttribute("sunset", `${helper.convertUnix(value.sys.sunset)}`);
};

export default { setCityCelcius, setForecast, setSunriseSunset };
