// Helper function for contraster() method from contraster.js 
// Its purpose is to set RGB values that are outside of the allowed [0, 255] range to the extremas of the range
function adjustExtrema(value) {
    var newValue;
    // If any of the RGB values fall below 0, they will get set to 0
    if (value < 0){
        newValue = 0;
    }
    // If any of the RGB values fall outside of 255, they will get set to 255
    else if (value > 255){
        newValue = 255;
    }
    // Otherwise, if they fall within range, they will be set to that computed value
    else{
        newValue = value;
    }
    return newValue;
}

// Make sure that this function is able to be used outside of this module/file (if needed)
module.exports = { adjustExtrema }