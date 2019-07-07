var count = 0;

document.addEventListener("DOMContentLoaded", function() {
  // Initialize Variables
  var nightcoreBtn = document.querySelector(".nightcore-btn button");
  var increment = document.querySelector(".pitch-increment");
  var decrement = document.querySelector(".pitch-decrement");
  var reset = document.getElementById("reset-btn");

  // NIGHTCORE MODE
  nightcoreBtn.addEventListener("click", function() {
    browser.tabs.executeScript({
      file: "./nightcore.js"
    });
  });

  // PITCH Semitone Controls
  reset.addEventListener("click", () => {
    alert("Please refresh the page to go back to normal~");
  });

  increment.addEventListener("click", () => {
    count = count + 1;
    document.querySelector(".semitone-count").textContent = count;
  });

  decrement.addEventListener("click", () => {
    count = count - 1;
    document.querySelector(".semitone-count").textContent = count;
  });
});
