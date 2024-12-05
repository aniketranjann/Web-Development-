document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "8f4297ee99d5597ad5753a5c4017e80c"; // env variable

  // Button functionality
  getWeatherBtn.addEventListener("click", async () => {
    //get city value from the input
    const city = cityInput.value.trim();
    if (!city) return;
    // whenever we are making web request to another server or database
    // 1. The server may throw you some error.
    // 2. Server is always in some other continent.--> it will take some time.
    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
    cityInput.value = "";
  });

  async function fetchWeatherData(city) {
    // gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    console.log(typeof response); // Object
    console.log("Response", response);
    if (!response.ok) {
      throw new Error("City Not found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    //display weather data
    console.log(data)
    const {name,main,weather} = data
    cityNameDisplay.textContent=name

    temperatureDisplay.textContent = `Temperature : ${main.temp}`
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`


    // unlock the display 
    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add('hidden');

  }
  function showError() {
    //The classList property returns the CSS classnames of an element.
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
