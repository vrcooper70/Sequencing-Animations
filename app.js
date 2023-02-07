const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");
  
  //alice1.animate(aliceTumbling, aliceTiming);

  // START HERE
// Using promises

  function shrink1() {
    return new Promise(function (resolve, reject) {
  
      setTimeout(() => {
        alice1.animate(aliceTumbling, aliceTiming);
        resolve();
      }, 1000);
    }   
  )};

  function shrink2() {
    return new Promise(function (resolve, reject) {
  
      setTimeout(() => {
        alice2.animate(aliceTumbling, aliceTiming);
        resolve();
      }, 2000);
    }   
  )};

function shrink3() {
  return new Promise(function (resolve, reject) {

    setTimeout(() => {
      alice3.animate(aliceTumbling, aliceTiming);
      resolve();
    }, 3000);
  }   
)};

 //shrink1().then(shrink2).then(shrink3).catch((error) => console.error(`Animation error ${error}`));

  // Using async await 

  function animateAlice(item) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(item.animate(aliceTumbling, aliceTiming))
      }, 1000);
    });
 };

  async function shrinkAll(item) {

    try {
    let first =  await animateAlice(alice1);
    let second = await animateAlice(alice2);
    let third = await animateAlice(alice3);
    }  catch(error) {
      alert(error);
    }
  
  };

 shrinkAll();
 
