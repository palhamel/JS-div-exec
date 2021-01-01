function playSound(e) {
  const audioFile = document.querySelector(
    `audio[data-key="${e.keyCode}"]`
  );
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(key)
  // stop function if no audio == data-key is present:
  if (!audioFile) return;
  // console.log(audio);
  // play audio:
  audioFile.currentTime = 0;
  audioFile.play();
  // add CSS on key press:
  key.classList.add("playing");
};

// remove CSS after key press:
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  // console.log(e.propertyName)
  // console.log(this)
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
key.addEventListener("transitionend", removeTransition)
);

// listen to element
window.addEventListener("keydown",playSound) 