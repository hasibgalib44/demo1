// Import the function to be tested
const { calculateAndPrintSum } = require('./sample.js'); // Assuming sample.js is in the same directory

// Keep a reference to the original console.log
const originalConsoleLog = console.log;
let capturedOutput = '';

// Override console.log to capture output
console.log = (output) => {
  capturedOutput += output;
};

// Call the function
calculateAndPrintSum();

// Restore the original console.log
console.log = originalConsoleLog;

// Assert the output
const expectedOutput = '41';
if (capturedOutput === expectedOutput) {
  console.log('Test passed: Output was ' + capturedOutput);
} else {
  console.log('Test failed: Expected ' + expectedOutput + ' but got ' + capturedOutput);
}
