## THE PROJECT

This project contains three important JavaScript files (adjust.js, contraster.js, inverter.js) which hold one crucial function each. adjust.js holds the helper function for contrasting images. inverter.js holds the function which inverts the colors of an image. contraster.js holds the function which changes the contrast of an image.

## inverter.js

This function takes in a .png image URL (from the images folder in this project) and outputs a .png image (to the images folder in this project). The edited image filename is automatically appended with '-inverted' to differentiate it from the original.

## contraster.js

This function takes in a .png image URL (from the images folder in this project) and a contrast value ranging from -255 to 255 (the value represents by how much you want the contrast of the given image to change; negative values mean decrease in contrast and positive values mean increase in contrast). This function outputs an edited .png image (to the images folder in this project). As with inverter.js, the output image is appended with '-contrasted' to differentiate it from the original.

## adjust.js

This is a simple helper function used to make sure edited RGB values of the image are within the accepted range, 0 to 255 (inclusive).

## DATA

All of the images used in testing (original, edited, double-edited) are included in the images folder. If the library is made public and users use their own images, in order for the library to work, their images will have to be .png images (for now) and will have to be placed inside of the images folder. Their edited images will show up there as well.

## TESTING

To test the functionality of both main functions, four tests have been written for each and placed inside of the test folder. Their functionality has been documented thoroughly inside. This specific project was built using Node.js and its unit tests were written using JSON. In order to run all eight tests, simply enter 'npm run test' from the terminal (once cd'ed within the project folder). The test results will be printed one by one inside of the terminal. You can also run tests one at a time with the call 'npm run test{value}' where {value} can be altered to the number of the test you desire. Please look inside package.json for further information about available tests.

## IMPORTANT NOTES FROM AIKA

Wanted to use this section to reiterate some constraints of my project and share a little bit of my journey building it out:

## Constraints

- The library can only work with .png files for now
- The images you want to transform have to be placed inside of the project's images folder
- The inverter() method takes in a string filepath
- The contraster() method takes in a string filepath and a contrast value ranging -255 to 255

## My Journey

It was really fun building this microlibrary. I first built it out as a web application because I had only built JavaScript applications as such in the past. However, after fully building out the functions and self-checking their functionally via visual tests, I ran into trouble building unit tests for a web-based application to formally prove the functions work. This was my main challenge of this project. After trying out an array of possible solutions, I decided to take the challenge and use my curiosity to my advantage to try to learn Node.js and Node-based unit testing -- a pair of things I have never learned or been taught before. After a lot of self-discipline and Googling, I picked both topics up and rebuilt my entire application as a Node-based application. Though my web-based application is fully functional and is safely stored in another repository (I can send it over to you if curious!), it was difficult to formally test and layed too much within my comfort zone. I wanted to use this project as a learning opportunity for lessons which are definately going with me to the future. Have fun walking through this project with me! Enjoy!
