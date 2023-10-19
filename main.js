status="";
function setup(){
    Canvas = createCanvas(300,300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    //video.parent('cam');
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("statusmodelo").innerHTML = "Status: detectando objetos";
    name=document.getElementById("no").value;
}
function modelLoaded(){
    console.log("modelo carregado!");
    status=true;
}
function draw(){
  
 
 image(video,0,0,300,300);

}