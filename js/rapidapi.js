const getWeather = async (city) => {
	const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city};`
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0a7c44118emshcb3fa59297134c2p1f0b14jsnafd3404283b7',
		'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
	}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		if (result.success) {
			cityFound = result.data 
			newData()
			console.log('@@@@ cityFound => ', cityFound)
			console.log
		} else {
			alert('City was not found, damn it')
		}
	} catch (error) {
	  console.error(error);
	}
}