// Function 1: Resolves after a given time
function delayResolve(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Resolved after ${time} milliseconds`);
      }, time);
    });
  }
  
  // Function 2: Rejects after a given time
  function delayReject(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(`Rejected after ${time} milliseconds`));
      }, time);
    });
  }
  
  // Function 3: Resolves immediately
  function immediateResolve() {
    return Promise.resolve('Resolved immediately');
  }
  
  // Function 4: Rejects immediately
  function immediateReject() {
    return Promise.reject(new Error('Rejected immediately'));
  }
  
  // Function 5: Randomly resolves or rejects after a given time
  function randomOperation(time) {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      setTimeout(() => {
        if (randomNumber < 0.5) {
          resolve('Resolved randomly');
        } else {
          reject(new Error('Rejected randomly'));
        }
      }, time);
    });
  }

  // Calling using then/catch
delayResolve(1000)
.then((result) => {
  console.log('Using then/catch:', result);
})
.catch((error) => {
  console.error('Using then/catch:', error);
});

// Using async/await within a try/catch block
async function executeAsyncFunctions() {
try {
  const result1 = await delayResolve(1500);
  console.log('Using async/await:', result1);

  const result2 = await delayReject(2000);
  console.log('Using async/await:', result2);
} catch (error) {
  console.error('Using async/await:', error);
}
}

executeAsyncFunctions();
