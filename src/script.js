/// Elements

let btnFile = document.getElementById("file");
let btnGeneratePuzzle = document.getElementById("generate");
let iptDifficulty = document.getElementById("difficulty");

let btnSelfie = document.getElementById("selfie");
let myVideo = document.getElementById("video");
let myPhoto = document.getElementById("photo");
var imageCapture = null;

/// Set config for all navigators

navigator.mediaDevices.getUserMedia =
  navigator.mediaDevices.getUserMedia ||
  navigator.mediaDevices.webkitGetUserMedia ||
  navigator.mediaDevices.mozGetUserMedia ||
  navigator.mediaDevices.msGetUserMedia;

/// Init video stream

function initVideoStream() {
  let promise = navigator.mediaDevices.getUserMedia({ video: true });

  promise
    .then((blob) => {
      myVideo.src = window.URL.createObjectURL(blob);
      myVideo.play();
    })
    .catch((error) => console.log("Error: " + error));
}

initVideoStream();
