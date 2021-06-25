
noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(1200, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#002a94');
    document.getElementById("square_side").innerHTML = "Width and height of the text will be: " +  difference + "px";
    fill("#69f0ae");
    stroke("#F90093");
    text("Prakhar", noseX, noseY);
    textSize(difference);
}

function modelLoaded(){
    console.log("model loaded :)");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+noseX+" and nose y = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.abs(floor(leftWristX - rightWristX));
        console.log("right wrist x = "+rightWristX+" and left wrist x = "+leftWristX+" difference = "+difference);
    }
}