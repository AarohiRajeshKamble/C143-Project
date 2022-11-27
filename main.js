song = ""; 
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
scorerightWrist = 0;

function preload() 
{
     song = loadSound("music.mp3");
} 

function setup() 
{   canvas = createCanvas(600, 500);
    canvas.center(); 

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}    
      
function draw() { 
    image(video, 50, 50, 600, 500) ;

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2)
    {
       circle(leftWristX, leftWristY,20);
       InNumberleftWrist = Number(leftWristY);
       volume = floor(InNumberleftWristY)/500;
       document.getElementById("volume").innerHTML = "Volume = " + volume;
       song.setVolume(volume);
    }
 } 
 
 function play() 
 { 
    song.play(); 
    song.setVolume(1);
    song.rate(1);
 }

 function modelLoaded(){
    console.log('PoseNet Initialized');
 }

 function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].scor;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX +"leftWristY ="+ leftWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("rightWristX =" + rightWristX +"rightWristY ="+ rightWristY )  ; 
    }
} 
