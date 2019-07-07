var count = 0;

document.addEventListener("DOMContentLoaded", function() {
  // Initialize Variables
  var nightcoreBtn = document.querySelector(".nightcore-btn button");
  var increment = document.querySelector(".pitch-increment");
  var decrement = document.querySelector(".pitch-decrement");
  var reset = document.querySelector(".reset-btn");

  // NIGHTCORE MODE
  nightcoreBtn.addEventListener("click", async function() {
    browser.tabs.executeScript({
      code: `console.log(window.location.href)`
    });
  });

  // PITCH Semitone Controls
  increment.addEventListener("click", () => {
    count = count + 1;
    document.querySelector(".semitone-count").textContent = count;
  });

  decrement.addEventListener("click", () => {
    count = count - 1;
    document.querySelector(".semitone-count").textContent = count;
  });

  reset.addEventListener("click", () => {
    count = 0;
    document.querySelector(".semitone-count").textContent = count;
  });
});
