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
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const response = JSON.parse(request.responseText);
            showWeather(response);
        }
    })
    request.open("GET", url);
    request.send();
}

function showWeather(data) {
    const {name, main: {temp}} = data;

    show.innerHTML = `
        <p class="name"><span>Shahar:</span> ${data.name} shahri</p>
        <p class="degree"><span>Harorat:</span> ${data.main.temp} C</p>
    `
    show.style.padding = "20px";
}