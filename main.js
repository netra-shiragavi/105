Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="image" src="'+data_uri+'">';
    })
}

console.log('version_of_ml5',ml5);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EFbumrL3n/model.json',load)

function load(){
    console.log("model successful");
}

function check(){
    img = document.getElementById('image');
    classifier.classify(img, getresult);
}

function getresult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result-object").innerHTML = result[0].label;
        document.getElementById("aqquracy-object").innerHTML = result[0].confidence.toFixed(3);
    }
}