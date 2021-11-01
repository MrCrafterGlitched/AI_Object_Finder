Status = true
objects = []
Object_Text = ""

function preload() {}

function setup() {
    canvas = createCanvas(580, 380)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function Start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = "Status:Detecting Objects"
    Object_Text = document.getElementById("Object_Text").value
}

function modelLoaded() {
    console.log("Model loaded");
    Status = true
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        objects = results
    }
}
/*function draw(){
   image(video,0,0,580,380);
    if (Status!="") {
        objectDetector.detect(video, getResults);
    for (i = 0; i < objects.length; i++) {
     document.getElementById("Status").innerHTML="Status: Objects detected"
     document.getElementById("Number").innerHTML="Number of objects found:"+ objects.length
     fill("#39a377")   
    percent=floor(objects[i].confidence*100)
    text(objects[i].label+"" +percent+ "%",objects[i].x +15,objects[i].y+15)
    noFill()
    stroke("#39a377")
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
  if (objects[i].label==Object_Text) {
      document.getElementById("Object_Thing").innerHTML=Object_Text+"found"
  } else {
      document.getElementById("Object_Thing").innerHTML=Object_Text+"not found."
  }    
}

}
}*/

function draw() {
    image(video, 0, 0, 480, 380);
    if (Status != "") {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("Status").innerHTML = "Status : Objects Detected";
            document.getElementById("Number").innerHTML = "Number of objects detected are : " + objects.length;
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}