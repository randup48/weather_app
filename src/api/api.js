import axios from "axios";

const apiKey = "8cfc800aaf595a35eb138bedb240c95b";

const getData = axios
  .get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: "depok",
      appid: apiKey,
      lang: "id",
      units: "metric",
    },
  })
  .then((response) => {
    // console.log(response);
    return {
      data: response.data,
      isSuccess: true,
    };
  })
  .catch((error) => {
    // console.log(error);
    return error["response"] !== undefined
      ? {
          message: error["response"]["data"]["message"],
          errorCode: error["response"]["data"]["cod"],
          isSuccess: false,
        }
      : {
          message: error["message"],
          errorCode: null,
          isSuccess: false,
        };
  });

export default { getData };
