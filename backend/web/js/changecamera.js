function change2(){
    document.getElementById('camera1').className="nav-link active";
    document.getElementById('camera2').className="nav-link";
    document.getElementById('camera3').className="nav-link";
    document.getElementById('camerachange').innerHTML=`<h1 id="camera_no" class="mt-4">Camera 1<img class="bulb" id="bulb" src="../web/img/bulb.png" onclick="br()"><span class="bulbbrightness">50%</span></h1><img class="cctv float-left" src="http://222.237.154.71:8091/?action=stream">`
}

function change3(){
    document.getElementById('camera2').className="nav-link active";
    document.getElementById('camera1').className="nav-link";
    document.getElementById('camera3').className="nav-link";
    document.getElementById('camerachange').innerHTML=`<h1 id="camera_no" class="mt-4">Camera 2<img class="bulb" id="bulb" src="../web/img/bulb.png" onclick="br()"><span class="bulbbrightness">50%</span></h1><video class="cctv" autoplay muted controls width="1567px" id="videosource"><source src=""></video>`
}

function change1(){
    document.getElementById('camera3').className="nav-link active";
    document.getElementById('camera1').className="nav-link";
    document.getElementById('camera2').className="nav-link";
    document.getElementById('camerachange').innerHTML=`<h1 id="camera_no" class="mt-4">Camera All<img class="bulb" id="bulb" src="../web/img/bulb.png" onclick="br()"><span class="bulbbrightness">50%</span></h1><img class="cctv2 float-left" src="http://222.237.154.71:8091/?action=stream"><video class="cctv2 float-left" autoplay muted controls width="780px" id="videosource"><source src=""></video><div></div><video class="cctv2 float-left" autoplay muted controls width="780px" id="videosource"><source src=""></video><video class="cctv2 float-left" autoplay muted controls width="780px" id="videosource"><source src=""></video>`
}