/* Testing on simple, one-color image.png */

// Importing necessary modules 
const PNG = require("pngjs").PNG;
const fs = require("fs");

// Reading filepath of double inverted image and transforming it from a datapath to a png image object
var img1 = fs.readFileSync('images/image-inverted-inverted.png');
var png1 = PNG.sync.read(img1);

// Doing the same thing with the original image
var img2 = fs.readFileSync('images/image.png');
var png2 = PNG.sync.read(img2);

// Taking both images and extracting their buffer arrays
var data1 = png1.data;
var data2 = png2.data;

// Indexing into a random, but the same location within the buffer array of both
// images to extract identifying data; these should match if everything went well
var buffer1 = data1[87];
var buffer2 = data2[87];

// If the data values match, that means the inversion works properly (since inverting the image twice
// should return the original image) and the test was passed!
if (buffer1 === buffer2){
    console.log ("Test 1 PASSED!");
}
// Otherwise, the test did not pass.
else {
    console.log ("Test 1 failed.");
}
// **Note: the rest of the test files for inverter() are written in the same fashion. The only
//         different thing about them is the source of the two images and the index into which 
//         we index.