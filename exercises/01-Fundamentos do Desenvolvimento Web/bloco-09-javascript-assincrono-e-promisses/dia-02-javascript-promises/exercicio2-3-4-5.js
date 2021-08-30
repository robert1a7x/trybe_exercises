const myPromise = new Promise((resolve, reject) => {
	const array = [];
	for (let i = 0; i < 10; i += 1) {
		array.push(Math.floor(Math.random() * 51))
	}
 const newArray = array.map((element) => element * element);
 const sum = newArray.reduce((acc, curr) => acc + curr, 0)
 
 if (sum < 8000) {
	 const divisionArray = [2, 3, 5, 10];
	 const outputArray = divisionArray.map((element) => sum / element);
	 resolve(outputArray);
 } else {
	 reject('É mais de oito mil! Essa promise deve estar quebrada!')
 }
});


myPromise.then(result => {
	console.log(result)
	return result.reduce((acc, curr) => acc + curr, 0)
})
.then(sum => console.log(sum))
.catch((error) => console.log(error))