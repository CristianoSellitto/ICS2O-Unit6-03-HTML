// Cristiano
// ICS2O-Unit6-03-HTML
// May 18 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-03-HTML/sw.js", {
    scope: "/ICS2O-Unit6-03-HTML/",
  })
}

/**
 * Finds the temperature using an API.
 */
const getTemperature = async (URL) => {
  try {
    const result = await fetch(URL)
    const jsonData = await result.json()
    const temperature = jsonData.main.temp - 273.15
    const feeling = jsonData.weather[0]
    const image = feeling.icon
    const status = feeling.main
    document.getElementById("result").innerHTML = "<h5>The current weather is " + temperature.toFixed(0) + "°C</h5>" + "<img src='http://openweathermap.org/img/wn/" + image + "@2x.png' alt='Weather Icon' width='10%'><br><h5>" + status + "</h5>"
  } catch (error) {
    console.log(error)
    document.getElementById("result").innerHTML = "<h5>An error occured fetching the current weather.</h5>"
  }
}

getTemperature("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")