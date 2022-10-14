let weather = {
    apiKey: '82c16e3433f4ecc1c3426e1332b11ac4',
    fetchWeather: function(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather.apiKey}`)
        .then((res) => {
            if (!res.ok) {
                alert('No weather found.')
                throw new Error('No weather found.')
            }
            return res.json()
        })
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind

        console.log(name, icon,description, temp, humidity, speed)

        document.querySelector('.city').innerText = name
        document.querySelector('.icon').src =  `https://openweathermap.org/img/wn/${icon}.png`
        document.querySelector('.description').innerText = description
        document.querySelector('.temp').innerText = temp + "°C"
        document.querySelector('.humidity').innerText = humidity + "%"
        document.querySelector('.wind').innerText = speed + " km/h"
        document.querySelector('.weather').classList.remove('loading')
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`
    },
    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
}

const searchBar = document.querySelector('.search-bar')
const searchButton = document.querySelector('.search button')

searchButton.addEventListener('click', () => {
    weather.search()
})

searchBar.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        weather.search()
    }
})

weather.fetchWeather('Daet')