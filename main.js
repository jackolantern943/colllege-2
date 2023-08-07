setTimeout(function()
{ 
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking you next selfie in ten seconds";
    var uttterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(uttterThis);
}, 5000);

Webcam.attach(camera);


camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});





function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id == "selfie1")
        document.getElementById("result1").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';

        if(img_id == "selfie2")
        document.getElementById("result2").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';

        if(img_id == "selfie3")
        document.getElementById("result2").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}