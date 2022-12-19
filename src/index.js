import "../style/style.scss";
import "./components/component.js";
import request from "./api/api.js";
import set from "./controller/controller.js";

const d = new Date();
const day = d.toLocaleDateString([], {
  weekday: "long",
});
const month = d.toLocaleDateString([], { month: "short" });
const date = d.getDate();
const year = d.getFullYear();

document.addEventListener("DOMContentLoaded", async () => {
  const value = await getWeather();
  const weatherIcon = `http://openweathermap.org/img/wn/${value.weather.icon}@2x.png`;
  // console.log(weatherIcon);

  if (value !== undefined) {
    // document.body.innerHTML = "";
    const navbar = document.createElement("custom-header");

    const main = document.createElement("main");

    const days = document.createElement("h5");
    const dateMonthYear = document.createElement("p");
    days.innerText = day;
    dateMonthYear.innerText = `${month}' ${date}, ${year}.`;

    const city = document.createElement("city-celcius");
    set.setCityCelcius({ value: value, element: city });

    const forecast = document.createElement("fore-cast");
    set.setForecast({ value: value, element: forecast, icon: weatherIcon });

    const SunriseSunset = document.createElement("sunrise-sunset");
    set.setSunriseSunset({ value: value, element: SunriseSunset });

    main.append(city, forecast, SunriseSunset);

    document.body.append(navbar, days, dateMonthYear, main);
  }
});

const getWeather = async () => {
  const result = await request.getData;
  console.log(result);
  try {
    if (result.isSuccess == true) {
      const data = result.data;

      return {
        weather: {
          main: data["weather"][0]["main"],
          desc: data["weather"][0]["description"],
          icon: data["weather"][0]["icon"],
        },
        main: {
          temp: data["main"]["temp"],
          humidity: data["main"]["humidity"],
          windSpd: data["wind"]["speed"],
        },
        sys: {
          cityName: data["name"],
          country: data["sys"]["country"],
          sunrise: data["sys"]["sunrise"],
          sunset: data["sys"]["sunset"],
        },
      };
    } else {
      document.body.innerHTML = "";
      document.body.innerText = `${result.errorCode} : ${result.message}`;
    }
  } catch (error) {
    console.log(error);
    document.body.innerHTML = "";
    document.body.innerText = error;
  }
};
