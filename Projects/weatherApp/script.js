const searchBtn = document.querySelector(".search-btn");
const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const dateOfMonth = document.querySelector("#date");
const monthOfYear = document.querySelector("#month");
const year = document.querySelector("#year");
const temp = document.querySelector("#temp");
const pmAm = document.querySelector(".day-night");
const weatherPic = document.querySelector("#weather-pic");
const nameDisplay = document.querySelector("#city");
const speed = document.querySelector("#speed");
const humidity = document.querySelector("#humidity");
let cityName = document.querySelector(".search-input");
cityName.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    cityGiven = cityName.value;
    logWeatherData(cityGiven);
  }
});
let cityGiven = cityName.value;
const config = {
  apiKey: "fe423178cce971cb3287c6e697cc095c",
  apiUrl: `https://api.openweathermap.org/data/2.5/weather?&units=metric`,
};
let getWeatherData = {
  fetchData: async function (cityGiven) {
    const response = await fetch(
      `${config.apiUrl}&q=${cityGiven}&appid=${config.apiKey}`
    );
    const data = await response.json();
    return data;
  },
};

async function logWeatherData(cityGiven) {
  try {
    const data = await getWeatherData.fetchData(cityGiven);
    function displayData() {
      const weather = data.weather[0].main;
      nameDisplay.innerHTML = data.name;
      temp.innerHTML = `${data.main.temp}°C`;
      speed.innerHTML = `${data.wind.speed}m/s`;
      humidity.innerHTML = `${data.main.humidity}%`;
      switch (weather) {
        case "clouds":
          weatherPic.src = "weatherImages/dark cloud.png";
          break;
        case "Clear":
          weatherPic.src = "weatherImages/sunny.png";
          break;
        case "Rain":
          weatherPic.src = "weatherImages/rainy.png";
          break;
        case "Snow":
          weatherPic.src = "weatherImages/snow.png";
          break;
        case "fog":
          weatherPic.src = "weatherImages/fogggy.png";
          break;
        case "Drizzle":
          weatherPic.src = "weatherImages/drizzle.png";
          break;
        case "thunderstorm":
          weatherPic.src = "weatherImages/thunderstorm.png";
          break;
      }
      console.log(data);
    }
    displayData();
  } catch (error) {
    setTimeout(() => {
      document.querySelector(".error").style.display = "flex";
    }, 1000);
    setTimeout(() => {
      document.querySelector(".error").style.display = "none";
    }, 4000);
    console.error("Error fetching data:", error);
  }
}
function setTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let d = time.getDay();
  let date = time.getDate();
  let month = time.getMonth();
  let y = time.getFullYear();
  let amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let Monthes = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  for (let i = 0; i < days.length; i++) {
    if (d === i) {
      d = days[i];
    }
  }
  for (let i = 0; i < Monthes.length; i++) {
    if (month === i) {
      month = Monthes[i];
    }
  }
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  day.innerHTML = d;
  dateOfMonth.innerHTML = date;
  year.innerHTML = y;
  monthOfYear.innerHTML = month;
  pmAm.innerHTML = amPm;
}

searchBtn.addEventListener("click", () => {
  cityGiven = cityName.value;
  console.log(cityGiven);
  logWeatherData(cityGiven);
});

setInterval(setTime, 1000);
