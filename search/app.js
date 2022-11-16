const searchButton = document.querySelector(".icon.search");
const clearButton = document.querySelector(".icon.delete");
const speechIntro = "Searching for ";
const clearSpeech = "cleared";

searchButton.addEventListener("click", () => {
  const input = document.querySelector("input");
  let text = input.value;

  if (input.value) {
    const utterance = new SpeechSynthesisUtterance(speechIntro + text);
    window.speechSynthesis.speak(utterance);

    console.log(speechIntro + text);
  } else {
    console.log("empty");
    return;
  }
});

clearButton.addEventListener("click", () => {
  document.querySelector("input").value = "";

  const utterance = new SpeechSynthesisUtterance(clearSpeech);
  window.speechSynthesis.speak(utterance);
});
