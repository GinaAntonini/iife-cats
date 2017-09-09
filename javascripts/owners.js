var CatStore = ((oldCatStore) => {
	let owners = [];

	oldCatStore.getOwners = () => {
		return owners;
	}

	oldCatStore.setAllOwners = (allMyOwners) =>{
		owners = allMyOwners;
	}

return oldCatStore;
})(CatStore || {});

