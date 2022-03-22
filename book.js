img = "";
objstatus = "";
objects = [];
function preload()
{
img = loadImage('book1.jpeg');

}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw()
{
image(img, 0, 0, 640, 420);
if(objstatus !="")
{
    for (i = 0; i < objects. length; i++)
    {
        document.getElementById("status").innerHTML = "status : Object Detected"
        document.getElementById("s1").innerHTML = "THERE IS 1 BIG OBJECT OUT OF WHICH "+ objects.length+" IS DETECTED"
        fill("#FF0000")
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y +15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}

}
function modelLoaded() {
    console.log("Model Loaded!")
    objstatus = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);

    }
    console.log(results);
    objects = results;
}