/**
 *  NightCorePitch FireFox Extension
 *
 * Methods:
 *
 * speedUp()
 * @description
 * Transpose video audio +1 semi tone.
 *
 * speedDown()
 * @description
 * Transpose video audio -1 semi tone.
 *
 * reset()
 * @description
 * Reset audio to normal tone.
 *
 */
var a = window.document.querySelector(".html5-main-video");
const semitone = 1.05946309436;
var c = a;
c.playbackRate = 1;
c.mozPreservesPitch = true;
console.log("result", c);
console.log(semitone);
// alert("adfs");
