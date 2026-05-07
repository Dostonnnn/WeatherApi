const form = document.querySelector(".form")
const input = document.querySelector(".search")
const btn = document.querySelector(".btn")
const show = document.querySelector(".result")
const url = `https://api.openweathermap.org/data/2.5/weather?q=toshkent&units=metric&appid=c67e3943b1537eb384b2ac2193719538`;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const result = input.value.trim();
    const ser = `https://api.openweathermap.org/data/2.5/weather?q=${result}&units=metric&appid=c67e3943b1537eb384b2ac2193719538`;
    getWeather(ser);
})

function getWeather(url) {
    fetch(url).then(res => res.json()).then((data) => {
            showWeather(data)
        }
    )
}

function showWeather(data) {
    const {name, main: {temp}} = data;
    show.innerHTML = `
        <p class="name"><span>Shahar:</span> ${data.name} shahri</p>
        <p class="degree"><span>Harorat:</span> ${data.main.temp} C</p>
    `
    show.style.padding = "20px";
}