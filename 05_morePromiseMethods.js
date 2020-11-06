function promise200ms() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("200");
      }, 200);
    });
  }
  
  function promise100ms() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("100");
      }, 100);
    });
  }
  
  function promiseReject300ms() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("error");
      }, 300);
    });
  }
  
  Promise.all([promise100ms(), promise200ms()])
    .then(function (resolvedPromises) {
      console.log(resolvedPromises);
    })
    .catch((error) => {
      console.log(error);
    });
  
  Promise.race([promiseReject300ms(), promise200ms()])
    .then(function (resolvedPromises) {
      console.log(resolvedPromises);
    })
    .catch((error) => {
      console.log(error);
    });
  