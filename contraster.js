// Import our adjustExtrema module/file from adjust.js
const { adjustExtrema } = require("./adjust");

// Function to change the contrast of a given image (only works with .png images for now)
function contraster (fileURL, contrast) {
    // Import necessary modules
    const canvas = require("canvas");
    const fs = require("fs");

    // Load the image provided in arguments, and once loaded, execute the following operations on the image
    canvas.loadImage(fileURL).then((image) => {
        // Create a canvas object and get its context
        var canVas = canvas.createCanvas(image.width, image.height);
        var context = canVas.getContext("2d");

        // Draw the sourced image on the canvas, starting at position (0, 0)
        context.drawImage(image, 0, 0);

        // Get the image's pixels (through var img), and then get each pixel's RGBA data (through var pixels), stored in an array
        var img = context.getImageData(0, 0, image.width, image.height);
        var pixels = img.data;
        
        // Calculate the contrast factor
        // Algorithm borrowed from: https://www.dfstudios.co.uk/articles/programming/image-programming-algorithms/image-processing-algorithms-part-5-contrast-adjustment/
        var factor = (259.0 * (contrast + 255.0))/(255.0 * (259.0 - contrast));
        
        // Iterate through the array of RGBA values and change the contrast of each value using the calculated factor
        // **Note: we use our adjustExtrema method from adjust.js to ensure that the values do not end up outside of the
        //         allowed range [0, 255]
        for (var i = 0; i < pixels.length; i += 4){
            pixels[i] = adjustExtrema(factor * (pixels[i] - 128.0) + 128.0);     // R (red) value
            pixels[i+1] = adjustExtrema(factor * (pixels[i+1] - 128.0) + 128.0); // G (green) value
            pixels[i+2] = adjustExtrema(factor * (pixels[i+2] - 128.0) + 128.0); // B (blue) value
        }
        
        // Place the edited image onto the canvas
        context.putImageData(img, 0, 0);
        // Transfer the canvas' data to a buffer (machine code)
        const buffer = canVas.toBuffer("image/png");
        // Manipulate the output image's filepath name (in prep for loading the edited canvas onto a .png file)
        const fileURLArray = fileURL.split(".");
        const newFileURL = fileURLArray[0] + "-contrasted" + "." + fileURLArray[1];

        // Write the canvas onto the .png file using the buffer information
        fs.writeFileSync(newFileURL, buffer);
    });
}
// Make sure that this function is able to be used outside of this module/file (if needed)
module.exports = { contraster }