let weather = {
    apiKey: '82c16e3433f4ecc1c3426e1332b11ac4',
    fetchWeather: (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather.apiKey}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
    }
}