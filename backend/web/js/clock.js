function printTime() {

    var clock = document.getElementById("clock");			// 출력할 장소 선택

    var now = new Date();									// 현재시간

    var minute = now.getMinutes();

    var hour = now.getHours();




    if (minute<10)											// 분이 10 이하일때 12:5 를 12:05로 만들어줌
    {
        minute = "0" + minute;
    }
    if (hour<10)                                            // 시도 마찬가지
    {
        hour = "0" + hour
    }

    var nowTime = hour + " : " + minute;

    clock.innerHTML = nowTime;           // 현재시간을 출력

    setTimeout("printTime()", 1000);         // setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000

}

window.onload = function () {                         // 페이지가 로딩되면 실행

    printTime();

}