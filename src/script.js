/// Elements

let btnFile = document.getElementById("file");
let btnGeneratePuzzle = document.getElementById("generate");
let iptDifficulty = document.getElementById("difficulty");
let btnSelfie = document.getElementById("selfie");
let VIDEO = document.querySelector("video");
let CANVAS = document.querySelector("canvas");
let CONTEXT = CANVAS.getContext("2d");

// IMAGE
btnFile.addEventListener("change", loadImage);

function loadImage() {
  CANVAS.renderImage(btnFile.files[0]);
}

HTMLCanvasElement.prototype.renderImage = (blob) => {
  var img = new Image();
  img.onload = () =>
    CONTEXT.drawImage(img, 10, 10, CANVAS.width - 20, CANVAS.height - 20);
  img.src = window.URL.createObjectURL(blob);
};

/// VIDEO

btnSelfie.addEventListener("click", () => {
  let stream = navigator.mediaDevices.getUserMedia({ video: true });

  stream
    .then((blob) => (VIDEO.srcObject = blob))
    .catch((err) => console.log(err));
  
  VIDEO.toBlob() = (blob) => {
    var img = new Image();
    img.onload = () => CONTEXT.drawImage(img, 10, 10, CANVAS.width - 20, CANVAS.height - 20);
    img.src = window.URL.createObjectURL(blob);
  }

});

// Initiate Video
// Let user choose picture file
// or take selfie
// Choose difficulty or let it at 1 - 1x10 pcs => 4 means 40 pcs.
// Press Generate puzzle
//  GENERATION:
// 1) Take picture and divide it into difficultyx10
// 2) Assign id to each p and randomize
// 3) Set drag
// 4) Set drop to exchange pcs
// 5) You win message!
