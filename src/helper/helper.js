const capitalizeFirst = (str) => {
  let splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
};

const convertUnix = (data) => {
  let d = new Date(data * 1000),
    hh = d.getHours(),
    h = hh,
    min = ("0" + d.getMinutes()).slice(-2),
    ampm = "AM",
    time;

  if (hh > 12) {
    h = hh - 12;
    ampm = "PM";
  } else if (hh === 12) {
    h = 12;
    ampm = "PM";
  } else if (hh === 0) {
    h = 12;
  }

  time = h + ":" + min + " " + ampm;

  return time;
};

export default { capitalizeFirst, convertUnix };
