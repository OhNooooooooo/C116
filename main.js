noseX = 0;
noseY = 0;

function preload() {
     clownNose = loadImage('https://i.postimg.cc/VLc4rVrJ/eeee.png');
}
function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialised')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        noseX = results[0].pose.nose.x; 
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
image(video, 0, 0, 400, 300);
fill(255,0,0);
stroke(255,0,0);
image(clownNose, noseX-15, noseY-15, 30, 30);
}
function take_snapshot() {
    save('myFilterImage.png');
}