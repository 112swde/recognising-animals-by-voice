function startRecognition()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Kt3zOkVbx/model.json",modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,result)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(result);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_count_dog").innerHTML = 'Dog - ' +(result[0].confidence*100).toFixed(2)
        document.getElementById("result_count_cat").innerHTML = 'Cat - ' + (result[0].confidence*100).toFixed(2)
        document.getElementById("result_label").innerHTML = 'Detected voice is of - '+ result[0].label;

        img = document.getElementById("animal_image");
        
        if (result[0].label == "cat"){
            img.src='smiling-cat-creepy-cat.gif';
        }
        else if (result[0].label == "dog")
        {
            img.src='cool-doge-cool-dog.gif';
           
        }
    }
}