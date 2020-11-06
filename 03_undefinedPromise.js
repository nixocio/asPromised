  
  function newPromiseError() {
      setTimeout(()=>{
          Promise.resolve('Undefined')
      })
  }
  
  newPromiseError().then(function(message){
      console.log(message)
  })
  
  