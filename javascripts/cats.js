var CatStore = ((oldCatStore) => {
	let cats = [];

	oldCatStore.getCats = () => {
		return cats;
	}

	oldCatStore.setAllCats = (allMyCats) =>{
		cats = allMyCats;
	}

return oldCatStore;
})(CatStore || {});

