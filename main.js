var musica1=""
var musica2=""
var status1=""
var status2=""
pulsoDireitox=0;
pulsoDireitoy=0;
pulsoEsquerdox=0;
pulsoEsquerdoy=0;
var canvas;
var video;
var classifier;

function preload(){
    musica1=loadSound("music.mp3")
    musica2=loadSound("music2.mp3")
}

function setup(){
canvas=createCanvas(600,500)
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("O modelo foi carregado");
}
function draw(){
    image (video,0,0,600,500);
    status1=musica1.isPlaying();
    status2=musica2.isPlaying();
    if(pontuacaoDireita>0.2){
circle(pulsoDiretox, pulsoDireitoy,20);
musica2.stop()
if(status1==false){
musica1.play()
document.getElementById("musica").innerHTML="tocando: tema de Harry Potter";
}
    }
    if(pontuacaoEsquerda>0.2){
        circle(pulsoEsquerdox, pulsoEsquerdoy,20);
        musica1.stop()
        if(status2==false){
        musica2.play()
        document.getElementById("musica").innerHTML="tocando: tema de Peter Pan";
        }
            }

}

function gotPoses(results){
    if(results.length>0){
        pontuacaoDireita=results[0].pose.keypoints[10].score
        pontuacaoEsquerda=results[0].pose.keypoints[9].score
        pulsoDireitox=results[0].pose.rightWrist.x
        pulsoDireitoy=results[0].pose.rightWrist.y
        pulsoEsquerdox=results[0].pose.leftWrist.x
        pulsoEsquerdoy=results[0].pose.leftWrist.y
    }
}

function play(){
    song.play()
    song.setVolume
}

