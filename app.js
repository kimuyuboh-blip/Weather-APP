// API details
const API_KEY = "8e5c81a408f77db58e804ee3bd6f29df"; // Get free from openweathermap.org
const BASE_URL ="https://api.openweathermap.org/data/2.5/weather";
// ...existing code...";

const input = document.getElementById('cityInput');
const button = document.getElementById('getWeatherBtn');
const result = document.getElementById('weatherResult');

// fetch weather data
async function fetchWeather(city) {
    try {
        // Build API URL
        const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        
        // Fetch data from API 
        const response = await fetch(url);    //fetch returns a promise
        if (!response.ok) {
            throw new Error('City not found');
        }

        // convert response to JSON
        const data = await response.json();

        // extract useful info
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Display result
        result.innerHTML = 
        `<h3>Weather in ${city}</h3>
        <p> 🚏 Temperature: ${temperature} °C</p>
        <p> 🪁 Condition: ${description}</p>`;
    } catch (error) {
    // handle errors (e.g wrong city name)
    result.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    } finally {button.disabled = false;}
};

// add click event listener to button
button.addEventListener('click', () => {
    const city = input.value.trim();
    if (city) {
        fetchWeather(city);  //call async function
    } else {
        result.innerHTML = `<p style="color:red;">Please enter a city name.</p>`;
    }   
});

// Optional: Add 'Enter' key functionality
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {e.button.keypress();}
});// Listen for clicks on the "Get Weather" button
// ...existing code...  