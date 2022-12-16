/// Elements

let btnFile = document.getElementById("file");
let btnGeneratePuzzle = document.getElementById("generate");
let iptDifficulty = document.getElementById("difficulty");

let btnSelfie = document.getElementById("selfie");
let myPhoto = document.getElementById("photo");
var imageCapture = null;

/// Init video stream

// LoadImage
btnFile.addEventListener("change", loadPicture);
function loadPicture(evt) {
  var tgt = evt.target;
  files = tgt.files;
  if (FileReader && files && files.length) {
    var fr = new FileReader();
    fr.onload = () => (myPhoto.src = fr.result);
    fr.readAsDataURL(files[0]);
  }
}

/// VIDEO

let VIDEO = null;
let CANVAS = null;
let CONTEXT = null;

function initStream() {
  CANVAS = document.getElementById("video");
  CONTEXT = CANVAS.getContext("2d");

  let promise = navigator.mediaDevices.getUserMedia({ video: true });

  promise
    .then((blob) => {
      VIDEO = document.createElement("VIDEO");
      VIDEO.srcObject = blob;
      VIDEO.play();
      VIDEO.onloadeddata(() => updateCanvas);
    })
    .catch((err) => console.log(err));
}

function updateCanvas() {
  CONTEXT.drawImage(VIDEO, 0, 0);
  setInterval(updateCanvas, 1000);
}

initStream();
