/* Testing on simple, one-color image.png */

// Importing necessary modules
const PNG = require("pngjs").PNG;
const fs = require("fs");

// Reading filepath of double contrasted image and transforming it from a datapath to a png image object
// 'Double contrasted' means the image's contrast was increased by a certain amount and then decreased by the same amount
var img1 = fs.readFileSync('images/image-contrasted-contrasted.png');
var png1 = PNG.sync.read(img1);

// Reading the filepath of the original image and transforming it from a datapath to a png image object
var img2 = fs.readFileSync('images/image.png');
var png2 = PNG.sync.read(img2);

// Taking both images and extracting their buffer arrays
var data1 = png1.data;
var data2 = png2.data;

// Indexing into a random, but the same location within the buffer array of both
// images to extract identifying data; these should match if everything went well
var buffer1 = data1[87];
var buffer2 = data2[87];

// If the data values match, that means the contrasting works properly and the test was passed!
if (buffer1 === buffer2){
    console.log ("Test 1 (contrast) PASSED!");
}
// Otherwise, the test did not pass.
else {
    console.log ("Test 1 (contrast) failed.");
}
// **Note: the rest of the test files for contraster() are written in the same fashion. The only
//         different thing about them is the source of the two images and the index into which 
//         we index.