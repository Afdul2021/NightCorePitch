/**
 *  NightCorePitch FireFox Extension
 */
var a = window.document.querySelector(".html5-main-video");
const semitone = 1.05946309436;
var c = a;
c.playbackRate = 1;
c.mozPreservesPitch = true;
console.log("result", c);
console.log(semitone);
