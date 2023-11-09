// Use the inquirer npm package to get user input.
// Use the qr-image npm package to turn the user entered URL into a QR code image.
// Create a txt file to save the user input using the native fs node module.

import inquirer from "inquirer";
import qr from "qr-image";


inquirer
    .prompt([
        /* Pass your questions in here */
        {
            message: "Type in your URL: ",
            name: "URL",
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.URL;

        // qr-image 
        var qr_svg = qr.image('I love QR!', { type: 'svg' });
        qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });