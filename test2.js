const { execSync } = require('child_process');

try {
  // Execute sample2.js and capture its stdout
  const output = execSync('node sample2.js', { encoding: 'utf8' });

  // Assert the output
  const expectedOutput = 'hello\n'; // Note the newline character
  if (output === expectedOutput) {
    console.log('Test passed: Output was "' + output.trim() + '"');
  } else {
    console.log('Test failed: Expected "' + expectedOutput.trim() + '" but got "' + output.trim() + '"');
  }
} catch (error) {
  console.error('Test execution failed:', error);
}
