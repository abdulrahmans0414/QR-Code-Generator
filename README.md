# QR Code Generator

QR Code Generator is a Node.js application that allows users to generate QR codes from URLs. It uses the inquirer npm package for user input, qr-image npm package to create QR code images, and native fs module for file handling.

## Prerequisites

Make sure you have Node.js installed on your system. If not, you can download it from [nodejs.org](https://nodejs.org/).

## Getting Started

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the application using `node index.js`.
4. Follow the prompts to enter the URL you want to generate a QR code for.

## Usage

After entering the URL, the application will generate a QR code image and save it as `qr_img.png`. The entered URL will also be saved in a text file called `URL.txt`.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): For interactive command-line prompts.
- [qr-image](https://www.npmjs.com/package/qr-image): For generating QR code images.
- [fs](https://nodejs.org/api/fs.html): Native Node.js module for file system operations.

## Contributing

Contributions are welcome! If you have suggestions or find issues, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
