function startRecognition()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Kt3zOkVbx/model.json",modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}