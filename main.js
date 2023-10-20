objects=[];
status="";
function setup(){
    Canvas = createCanvas(300,300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    //video.parent('cam');
}

function iniciar(){
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

 if(status !=""){
    objectDetector.detect(video,gotResult);
    for (i = 0; i < objects.length; i++) {
        document.getElementById("statusmodelo").innerHTML = "status: Objetos Detectados";

        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].width, objects[i].height);

        if(objects[i].label == name)
        {
            video.stop();
            objectDetector.detect(gotResult);
            document.getElementById("statusmodelo").innerHTML = name + " Encontrado";
            synth = windown.speechSynthesis;
            utterThis = new SpeechSynthesisUtterance(name + " Encontrado");
            synth.speak(utterThis);
        }
        else{
            document.getElementById("statusom").innerHTML = name + " Não Encontrado";
        }
    }
}
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;

    }
}