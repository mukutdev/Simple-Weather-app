// declared all variables

const inputField = document.getElementById('inputValue');
const button = document.getElementById('srchBtn');
const weatherImg = document.getElementById('weather-img');
const locations = document.getElementById('location');
const temp = document.getElementById('temp');
const forecast = document.getElementById('forecast');
const API_KEY = '9c6d0454dc069153895b2177cdd83b6d';

// button event handler

button.addEventListener('click', () => {
     
    const cityInput = inputField.value;

    // fetch data using open weather api

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=&metric&APPID=${API_KEY}`)

        .then(res => res.json())
        .then(data => {

            locations.innerText = data.name;

            const temperature = (Math.round(data.main.temp) - 273);
            temp.innerText = `${temperature}°C`;
            forecast.innerText = (data.weather[0].main);     
            const id = (data.weather[0].id);
        
        //checking id for updating icon according to weather condition

            if (id < 250) {
                weatherImg.src = 'http://openweathermap.org/img/wn/11d@2x.png';
            }
            else if (id < 350) {
                weatherImg.src = 'http://openweathermap.org/img/wn/09d@2x.png';
            }
            else if (id < 550) {
                weatherImg.src = 'http://openweathermap.org/img/wn/10d@2x.png';
            }
            else if (id < 650) {
                weatherImg.src = 'http://openweathermap.org/img/wn/13d@2x.png';
            }
            else if (id < 790) {
                weatherImg.src = 'http://openweathermap.org/img/wn/50d@2x.png';
            }
            else if (id < 800) {
                weatherImg.src = 'http://openweathermap.org/img/wn/01d@2x.png';
            }
            else if (id < 810) {
                weatherImg.src = 'http://openweathermap.org/img/wn/04d@2x.png';
            }

           
            
        });
 })