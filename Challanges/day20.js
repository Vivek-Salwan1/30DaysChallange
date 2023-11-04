// day20 challenge - write a program to create a deadlock scenario programatically in javascript

// Deadlock scenario using Web Workers

// Create two workers
const worker1 = new Worker('worker1.js');
const worker2 = new Worker('worker2.js');

// Shared resources
const resource1 = { locked: false };
const resource2 = { locked: false };

// Worker 1 requests resource 1 and then resource 2
worker1.onmessage = function (event) {
  if (event.data === 'requestResource1') {
    if (!resource1.locked) {
      resource1.locked = true;
      worker1.postMessage('resource1Locked');
    } else {
      // Resource 1 is locked, wait for resource 1 to be released
      worker1.postMessage('waitingForResource1');
    }
  } else if (event.data === 'requestResource2') {
    if (!resource2.locked) {
      resource2.locked = true;
      worker1.postMessage('resource2Locked');
    } else {
      // Resource 2 is locked, wait for resource 2 to be released
      worker1.postMessage('waitingForResource2');
    }
  }
};

// Worker 2 requests resource 2 and then resource 1
worker2.onmessage = function (event) {
  if (event.data === 'requestResource2') {
    if (!resource2.locked) {
      resource2.locked = true;
      worker2.postMessage('resource2Locked');
    } else {
      // Resource 2 is locked, wait for resource 2 to be released
      worker2.postMessage('waitingForResource2');
    }
  } else if (event.data === 'requestResource1') {
    if (!resource1.locked) {
      resource1.locked = true;
      worker2.postMessage('resource1Locked');
    } else {
      // Resource 1 is locked, wait for resource 1 to be released
      worker2.postMessage('waitingForResource1');
    }
  }
};

// Start the deadlock by requesting resources in opposite order
worker1.postMessage('requestResource1');
worker2.postMessage('requestResource2');
