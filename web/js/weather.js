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
        brightnessimg.src = '../web/img/high_brightness.png';
    } else if (x > 40) {
        brightnessimg.src = '../web/img/middle_brightness.png';
    } else { brightnessimg.src = '../web/img/low_brightness.png'; }
}

function changetemperature(){
    var tem = temperature.innerHTML;
    y=parseInt(tem);
    if (y > 20) {
        temperatureimg.src = '../web/img/high_temperature.png';
    } else if (y > 10) {
        temperatureimg.src = '../web/img/normal_temperature.png';
    } else { temperatureimg.src = '../web/img/low_temperature.png'; }
}

function changetweather(){
    var wea = weather.innerHTML;
    if (wea == 'Sunny') {
        weatherimg.src = '../web/img/sunny.png';
    }
    if (wea == 'Windy') {
        weatherimg.src = '../web/img/windy.png';
    }
    if (wea == 'Rainy') {
        weatherimg.src = '../web/img/rainy.png';
    }
}

function changedust() {
    var dus = dust.innerHTML;
    y = parseInt(dus);
    if (y > 150) {
        dustimg.src = '../web/img/bbad_dust.png';
    } else if (y > 80) {
        dustimg.src = '../web/img/bad_dust.png';
    } else if (y > 30) {
        dustimg.src = '../web/img/normal_dust.png';
    } else { dustimg.src = '../web/img/good_dust.png'; }
}

changebrightness();
changedust();
changetemperature();
changetweather();