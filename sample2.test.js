const { exec } = require('child_process');
const assert = require('assert');
const path = require('path');

// Define the path to the script to be tested
const scriptPath = path.join(__dirname, 'sample2.js');

// Define the expected output and exit code
const expectedStdout = 'hello\n';
const expectedExitCode = 0;

// Run the test
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  // Assert that there are no errors during execution
  assert.strictEqual(error, null, `Execution error: ${error}`);

  // Assert that standard error is empty
  assert.strictEqual(stderr, '', `Standard error should be empty: ${stderr}`);

  // Assert that the standard output is as expected
  assert.strictEqual(stdout, expectedStdout, `Standard output mismatch: expected '${expectedStdout}', got '${stdout}'`);

  // Assert that the exit code is as expected (implicitly checked by error being null for exit code 0)
  // For non-zero exit codes, 'error' object would be populated.
  // If we need to explicitly check a non-zero exit code, error.code would be used.
  // In this case, error being null implies exit code 0.

  console.log('Test passed successfully!');
});
