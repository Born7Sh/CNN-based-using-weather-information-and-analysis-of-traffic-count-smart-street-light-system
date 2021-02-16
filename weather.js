var brightness = document.getElementById('brightness');
var temperature = document.getElementById('temperature');
var weather = document.getElementById('weather');
var dust = document.getElementById('dust');

var brightnessimg = document.getElementById('brightnessimg');
var temperatureimg = document.getElementById('temperatureimg');
var weatherimg = document.getElementById('weatherimg');
var dustimg = document.getElementById('dustimg');

function changebrightness(){
    var bri = brightness.innerHTML;
    x=parseInt(bri);
    if (x > 70) {
        brightnessimg.src = 'high_brightness.png';
    } else if (x > 40) {
        brightnessimg.src = 'middle_brightness.png';
    } else { brightnessimg.src = 'low_brightness.png'; }
}

function changetemperature(){
    var tem = temperature.innerHTML;
    y=parseInt(tem);
    if (y > 20) {
        temperatureimg.src = 'high_temperature.png';
    } else if (y > 10) {
        temperatureimg.src = 'normal_temperature.png';
    } else { temperatureimg.src = 'low_temperature.png'; }
}

function changetweather(){
    var wea = weather.innerHTML;
    if (wea == 'Sunny') {
        weatherimg.src = 'sunny.png';
    }
    if (wea == 'Windy') {
        weatherimg.src = 'windy.png';
    }
    if (wea == 'Rainy') {
        weatherimg.src = 'rainy.png';
    }
}

function changedust() {
    var dus = dust.innerHTML;
    y = parseInt(dus);
    if (y > 150) {
        dustimg.src = 'bbad_dust.png';
    } else if (y > 80) {
        dustimg.src = 'bad_dust.png';
    } else if (y > 30) {
        dustimg.src = 'normal_dust.png';
    } else { dustimg.src = 'good_dust.png'; }
}