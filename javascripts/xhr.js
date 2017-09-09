var CatStore = ((oldCatStore) => {

	oldCatStore.catLoadWorks = function(){
		let catData = JSON.parse(this.responseText).cats;
		console.log("catData", catData);
	};

	oldCatStore.ownerLoadWorks = function(){
		let ownerData = JSON.parse(this.responseText).owners;
		console.log("ownerData", ownerData);
	};

	oldCatStore.catsBroke = () => {
		console.log("WHAT DID YOU DO?");
	};

	oldCatStore.catXHR = () => {
		let myCats = new XMLHttpRequest;
		myCats.addEventListener("load", CatStore.catLoadWorks)
		myCats.addEventListener("error", CatStore.catsBroke)
		myCats.open("GET", "./db/cats.json")
		myCats.send();
	};

	oldCatStore.ownerXHR = () => {
		let myOwners = new XMLHttpRequest;
		myOwners.addEventListener("load", CatStore.catLoadWorks)
		myOwners.addEventListener("error", CatStore.catsBroke)
		myOwners.open("GET", "./db/owners.json")
		myOwners.send();
	};

	return oldCatStore;
})(CatStore || {});

