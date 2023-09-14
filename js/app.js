const btnGetWeather = document.getElementById('btnGetWeather')
const citySearch = document.getElementById('city')
let cityFound = {}

btnGetWeather.addEventListener('click', () => {
    if(citySearch.value.trim().length > 0) {
        getWeather(citySearch.value)
    } else {
        alert('Ciudad Vacía')
        citySearch.focus()
    }
})

const newData = () => {
    const city = document.getElementById('newCity')
    city.textContent = cityFound.city

    const hour = document.getElementById('newHour')
    hour.textContent = cityFound.hour

    const humidity = document.getElementById('newHumidity')
    humidity.textContent = cityFound.humidity
    
    const wind = document.getElementById('newWind')
    wind.textContent = cityFound.wind

    const temp = document.getElementById('newTemp')
    temp.textContent = cityFound.temp

    const current = document.getElementById('newCurrent')
    current.textContent = cityFound.current

    const uv_index = document.getElementById('newUV')
    uv_index.textContent = cityFound.uv_index
}