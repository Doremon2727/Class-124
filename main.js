function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(450, 450);
    canvas.position(560,130);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('plum');
}

function modelLoaded() {
    console.log('PoseNet is Initalized !')
}

function gotPoses(results) {
    if (results.length > 0 ) {
    console.log(results);
    }
}