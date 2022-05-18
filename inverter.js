// Function to invert the color of a given image (only works with .png images for now)
function inverter (fileURL) {
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
        
        // Iterate through the array of RGBA values and change each as necessary
        for (var i = 0; i < pixels.length; i += 4){
            pixels[i] = 255 - pixels[i];     // R (red) value
            pixels[i+1] = 255 - pixels[i+1]; // G (green) value
            pixels[i+2] = 255 - pixels[i+2]; // B (blue) value
        }

        // Place the edited image onto the canvas
        context.putImageData(img, 0, 0);
        // Transfer the canvas' data to a buffer (machine code)
        const buffer = canVas.toBuffer("image/png");
        // Manipulate the output image's filepath name (in prep for loading the edited canvas onto a .png file)
        const fileURLArray = fileURL.split(".");
        const newFileURL = fileURLArray[0] + "-inverted" + "." + fileURLArray[1];
        
        // Write the canvas onto the .png file using the buffer information
        fs.writeFileSync(newFileURL, buffer);
    });
}
// Make sure that this function is able to be used outside of this module/file (if needed)
module.exports = { inverter }
