function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

/*
// consume a promise 
let resposne = fetchData();
console.log(resposne); // pending 
*/

fetchData()
  .then((data) => {
    console.log(data);
    return `Aniket`;
  })
  .then((value)=>{
    console.log(value.toLowerCase());
    
  })
  .catch((error) =>
    //  {}
    console.log(error)
  );
