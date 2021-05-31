songHPleft ="";
songPPright="";

function preload(){
    songHPleft = loadSound('music.mp3');
    songPPright = loadSound('music2.mp3')
}

function setup(){
    canvas = createCanvas(550,600);
    canvas.center();
    console.log('canvas set up')

    video = createCapture(VIDEO);
    video.hide();
    console.log('video set up')
}

function draw(){
    image(video , 0 , 0 , 550 , 600);
}