function fetchUserData()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            resolve({name : "MrBeast",url: "https://mrbeast.com"})
        }, 3000);
    })
 
}

// fetchUserData
// .then()
// .catch()

async function getUserData() {
    // not always we are going to get the data , we will implement try catch
    try {
        console.log("Fetching user data...");
        // await fetchUserData()
        const userData =  await fetchUserData();
        console.log("Here is your user data: ", userData);
        
        
    } catch (error) {
        console.log("Error in fetching data",error);
        
    }
}

getUserData();
