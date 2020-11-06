function resolvedPromise() {
    return Promise.resolve("Promise");
  }
  
  function rejectedPromise() {
    return Promise.reject();
  }
  
  resolvedPromise().then(function (data) {
    console.log("Resolved...", data);
  });
  
  rejectedPromise().catch(function () {
    console.log("rejected");
  });
  
  // resolve, reject can be called anything
  function newPromise() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Hello");
      }, 1000);
    });
  }
  
  newPromise().then(function (message) {
    console.log(message);
  });
  
  function getData(success) {
    return new Promise((good, bad) => {
      setTimeout(() => {
        if (success) {
          good([
            { id: 1, name: "Foo" },
            { id: 2, name: "Bar" },
            { id: 3, name: "Baz" },
          ]);
        } else {
          bad("Not good");
        }
      }, 1000);
    });
  }
  
  getData(false).then((response) => {
    console.log(response);
  }).catch(error => {
    console.error(error)
  }).finally(()=>{
    console.log('finally was called')
  });
  