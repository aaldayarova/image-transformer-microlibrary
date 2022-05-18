/* Testing on water.png -- an up-close shot of a body of water */

// This test file follows the same logic as inverter-test-1.js; please head there to see an explanation
const PNG = require("pngjs").PNG;
const fs = require("fs");

var img1 = fs.readFileSync('images/water-inverted-inverted.png');
var png1 = PNG.sync.read(img1);

var img2 = fs.readFileSync('images/water.png');
var png2 = PNG.sync.read(img2);

var data1 = png1.data;
var data2 = png2.data;

var buffer1 = data1[87];
var buffer2 = data2[87];

if (buffer1 === buffer2){
    console.log ("Test 5 PASSED!");
}
else {
    console.log ("Test 5 failed.");
}