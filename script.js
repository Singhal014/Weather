const API_KEY = "cfd66e5dab2e28ca317b5502e8eb90b1";

function renderWeatherInfo(data){
	let newPara = document.createElement("p");
	newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
	document.body.appendChild(newPara);
}
async function fetchWeatherDeatils(){

	try{
		let city = "goa";
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

	const data = await response.json();
	console.log("Weather data:->" , data);
	renderWeatherInfo(data);
	}
	catch(err){

	}
	
}

async function getCustomWeatherDeatils(){
	try{
		let lat = 17.6333;
		let lon = 18.3333;

		let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

		let data = await result.json();
		console.log(data);
	}
	catch(err){
		console.log("Error Found" , err);
	}
}

function switchTab(clickedTab) {

	apiErrorContainer.classList.remove("active");
	
	if (clickedTab !== currentTab) { currentTab.classList.remove("current-tab"); currentTab = clickedTab;
	
	currentTab.classList.add("current-tab");
	
	if (!searchForm.classList.contains("active")) { userInfoContainer.classList.remove("active"); grantAccessContainer.classList.remove("active"); searchForm.classList.add("active");
	
	}
	
	else { searchForm.classList.remove("active"); userInfoContainer.classList.remove("active"); //getFromSessionStorage();
	
	}
	
	// console.log("Current Tab", currentTab);
	
	}
}


function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else{
		console.log("No GeoLocation Support");
	}
}
function showPosition(position){
	let lat = position.coords.latitude;
	let longi = position.coords.longitude;

	console.log(lat);
	console.log(longi);
	
}
