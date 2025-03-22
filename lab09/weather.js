const endpoint = "https://api.open-meteo.com/v1/forecast?latitude=43.04&longitude=-76.14&current=temperature_2m,precipitation,cloud_cover&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch";
        
function reportResults(responseText) {
    const data = JSON.parse(responseText);
    document.getElementById("temperature").textContent = data.current.temperature_2m;
    document.getElementById("precipitation").textContent = data.current.precipitation;
    
    const cloudCover = data.current.cloud_cover;
    document.getElementById("cloudCover").textContent = cloudCover > 50 ? "☁️" : "☀️";
}

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        reportResults(request.responseText);
    } else if (request.readyState === 4) {
        document.getElementById("temperature").textContent = "Error";
        document.getElementById("precipitation").textContent = "Error";
        document.getElementById("cloudCover").textContent = "Error";
    }
});

request.open('GET', endpoint);
request.send();