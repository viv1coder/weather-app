const form = document.querySelector("form");
const button = document.querySelector("#searchbtn");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const cityinput = document.getElementById("inputcity");
  const cityname = document.getElementById("cityname");
  const date = new Date();
  const citytemp = document.getElementById("temp");
  const datedisplay = document.getElementById("date");
  const feelslike = document.getElementById("feelslike");
  const pressure = document.getElementById("pressure");
  const basestation = document.getElementById("base");
  const windspeed = document.getElementById("windspeed");
  const humidity = document.getElementById("humidity");
  const visibility = document.getElementById("visibility");
  const errorr = document.getElementById("error");

  const apiKey = "83758b91e73482c6141dabfa00b61e38";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityinput.value}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Store the data in localStorage
      localStorage.setItem('weatherData', JSON.stringify(data));

      // Redirect to the second page (weather2.html)
      window.location.href = "weather2.html";
    })
    .catch(error => {
      errorr.style.display = "flex";
      citytemp.textContent = error;
      cityinput.value = " ";
      let errorMessage = "Failed to fetch weather data.";
      if (error.response) {
        errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
      }
      citytemp.textContent = errorMessage;
      cityinput.value = "";
    });
});
