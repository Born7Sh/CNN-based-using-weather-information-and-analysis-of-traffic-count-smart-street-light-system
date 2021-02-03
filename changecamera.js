function change1(){
    document.getElementById('camera1').className="nav-link active";
    document.getElementById('camera2').className="nav-link";
    document.getElementById('camera_no').innerHTML="Camera1"
    var video = document.getElementById('videosource');
    video.src="mp4 sample.mp4"
    video.play();
}

function change2(){
    document.getElementById('camera2').className="nav-link active";
    document.getElementById('camera1').className="nav-link";
    document.getElementById('camera_no').innerHTML="Camera2"
    var video = document.getElementById('videosource');
    video.muted = false;
    video.volume = 0.2;
    video.src="Hell.mp4#t=8"
    video.play();

}

function a(){
    var video = document.getElementById('videosource');
    
}