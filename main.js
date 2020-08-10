
let initData = () => {
	let dataSetMap = [
		{
			value: 1,
			style: 'card-1'
		},
		{
			value: 2,
			style: 'card-2'
		},
		{
			value: 3,
			style: 'card-3'
		},
		{
			value: 4,
			style: 'card-4'
		},
		{
			value: 5,
			style: 'card-5'
		},
		{
			value: 6,
			style: 'card-6'
		},
		{
			value: 7,
			style: 'card-7'
		},
		{
			value: 8,
			style: 'card-8'
		},
		{
			value: 9,
			style: 'card-9'
		}
	]; 

	function shuffle(){
		let newShuffledDataSet = [];
		
		while (dataSetMap.length){
			let randomIdx = Math.floor(Math.random() * dataSetMap.length );
			newShuffledDataSet.push(dataSetMap[randomIdx]);
			dataSetMap.splice(randomIdx,1);
		}
		dataSetMap = newShuffledDataSet;
		drawCards(dataSetMap);
	}

	let sort = () => {
		dataSetMap = dataSetMap.sort((a,b) => a.value - b.value);
		drawCards(dataSetMap);
	}

	let drawCards = (dataSet) => {
		let list_2 = document.querySelector('.card-container');
		if(list_2 && list_2.innerHTML){
			list_2.innerHTML = "";
		}
		
		dataSet.forEach((data) => {
			let newCard = document.createElement('div');
			newCard.className = 'card card-'+ data.value;
			newCard.innerHTML = data.value;
			list_2.appendChild(newCard); 
		})
	}

	let initDrawCard = () => {
		drawCards(dataSetMap);
	};

	return {
		"shuffle": shuffle,
		"sort": sort,
		"initDrawCard": initDrawCard
	  };
}

window.onload = () => dataSetup.initDrawCard();

let dataSetup = initData();
