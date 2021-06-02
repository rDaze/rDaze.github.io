// JavaScript Document

document.onload = function () {
	document.getElementById("video").play();
}

window.onclick = function () {
	document.getElementById("video").play();
}

function copy(value) {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

document.addEventListener('click', () => {
	var video = document.getElementById("video");
	video.muted = !video.muted;
});
