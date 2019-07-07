function onExecuted(result) {
  console.log(`We made it green`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var makeItGreen = 'document.body.style.border = "5px solid green"';

var executing = browser.tabs.executeScript({
  code: makeItGreen,
  allFrames: true
});
executing.then(onExecuted, onError);
