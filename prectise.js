const Promise1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
  console.log('solve your problem')
  resolve(10);
  },1000)
  });
  const Promise2 = new Promise((resolve,reject)=>{
      setTimeout(()=>{
      console.log('2nd problem has failed')
      reject("failed");
      },2000)
      });
      const Promise3 = new Promise((resolve,reject)=>{
          setTimeout(()=>{
          console.log('solve your 3rd problem')
          resolve(30);
          },3000)
          });
  
          Promise.all([Promise1,Promise2,Promise3]).then((result)=>{
              console.log(`results: ${result}`);
              }).catch((error)=>{
                  console.log(`errors: ${error}`);
                  });