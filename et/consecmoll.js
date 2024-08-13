const control = {stop: false};

// Later in the program, you might modify the `control` object
// For example, to indicate that something should stop:
control.stop = true;

// You can check the value of `stop` elsewhere in your code
if (control.stop) {
    // Take action if stop is true
    console.log('Stopping operation...');
} else {
    // Continue with normal operation
    console.log('Operation continues...');
}
