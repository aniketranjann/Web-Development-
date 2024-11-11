let teaFlavors = ["green tea","black tea","oolong tea"]
console.log(teaFlavors[0]);

let cities = ["London","Tokyo","Paris","New York"]
let favoriteCity = cities[2];
console.log(favoriteCity);

let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1] = "jasmine tea";
console.log(teaTypes[1]);

let citiesVisited = ["Mumbai","Sydney"]
citiesVisited.push("Berlin");
console.log(citiesVisited);

let teaOrders = ["chai","icedTea","matcha","earl grey"]
console.log(teaOrders);
teaOrders.pop();
console.log(teaOrders);

// creating soft copy 
let popularTea= ["green tea", "oolong tea", "chai"];
let copyPopularTea = popularTea;
console.log(copyPopularTea);
console.log(popularTea);
popularTea.pop();
console.log(copyPopularTea);

// creating hard copy -- separate copy of file -- shallow copy
let topCities = ["Berlin","Singapore", "New York"]
let copyTopCities = Array.from(topCities)
console.log(copyTopCities);
topCities.pop();
console.log(copyTopCities);

// using spread operator
let copyTopCities1 = [...topCities]
console.log(copyTopCities1);
// using slice method 
let copyTopCities2 = topCities.slice();
console.log(copyTopCities2);


// Merge 
let europeanCities = ["Paris","Rome"]
let asianCities = ["Tokyo", "Bangkok"]
/*
// give string type as ouput 
let worldCities = europeanCities + asianCities
console.log(worldCities);
*/
let worldCities = europeanCities.concat(asianCities)
console.log(worldCities);

// length 
let teaMenu = ["Masala Tea", "oolong tea", "green tea"]
let len = teaMenu.length;
console.log(len);

// element is present 
let cityBucketList = ["kyoto","London","Cape town","Vancouver"]
let isLondonInList = cityBucketList.includes("London");
// case sesnitive
console.log(isLondonInList);
