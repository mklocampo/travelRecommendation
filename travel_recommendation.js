
const travels = [];

function searchResults(){
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('searchResults').style.display = 'block';
    const input = document.getElementById('inputSearchItems').value.trim().toLowerCase();
    const resultDiv = document.getElementById('divSearchResultList');
    resultDiv.innerHTML = '';
   
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {

        let search = [];
        if(input == 'countries' || input == 'country'){
            var countries = data.countries;
            if(countries){
                var concat = "";
                var cities;
                countries.forEach(element => {
                    cities = element.cities;
                    concat = ""; 
                    if (cities) {
                        cities.forEach(element => {
                            console.log(element.name);
                            concat +=`<div class="divSearchResultItem center">`;
                            concat +=`<div class="divResultItemImg">`;
                            concat +=`<img onclick="getContryDateTime('${element.zone}','${element.timeZone}')" src="${element.imageUrl}"></img>`;
                            concat +=`</div>`;
                            concat +=`<div>`;
                            concat +=`<h1>${element.name}</h1>`;
                            concat +=`</div>`;
                            concat +=`<div>`;
                            concat +=`<p>${element.description}</p>`;
                            concat +=`</div>`;
                            concat +=`</div>`; 
                        });
                        resultDiv.innerHTML +=concat;
                    } else {
                      resultDiv.innerHTML = '<h2>countries not found.</h2>';
                    }
                });
            }
        
        }else if(input == 'temples' || input == 'temple'){
            search = data.temples; 
            if (search) {
                var concat = "";
                search.forEach(element => {
                    console.log(element.name);
                    concat +=`<div class="divSearchResultItem center">`;
                    concat +=`<div class="divResultItemImg">`;
                    concat +=`<img onclick="getContryDateTime('${element.zone}','${element.timeZone}')" src="${element.imageUrl}"></img>`;
                    concat +=`</div>`;
                    concat +=`<div>`;
                    concat +=`<h1>${element.name}</h1>`;
                    concat +=`</div>`;
                    concat +=`<div>`;
                    concat +=`<p>${element.description}</p>`;
                    concat +=`</div>`;
                    concat +=`</div>`; 
                });
                resultDiv.innerHTML +=concat;
            } else {
              resultDiv.innerHTML = '<h2>temples not found.</h2>';
            }

        }else if(input == 'beaches' || input == 'beach'){
            search = data.beaches;
            console.log(input);
            if (search) {
                var concat = "";
                search.forEach(element => {
                    console.log(element.name);
                    concat +=`<div class="divSearchResultItem center">`;
                    concat +=`<div class="divResultItemImg">`;
                    concat +=`<img onclick="getContryDateTime('${element.zone}','${element.timeZone}')" src="${element.imageUrl}"></img>`;
                    concat +=`</div>`;
                    concat +=`<div>`;
                    concat +=`<h1>${element.name}</h1>`;
                    concat +=`</div>`;
                    concat +=`<div>`;
                    concat +=`<p>${element.description}</p>`;
                    concat +=`</div>`;
                    concat +=`</div>`; 
                });
                resultDiv.innerHTML +=concat;
            } else {
              resultDiv.innerHTML = '<h2>Beaches not found.</h2>';
            }
        }else{
            resultDiv.innerHTML = '<h2>Search not found.</h2>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = '<h2>An error occurred while fetching data.</h2>';
    });
}
const input = document.querySelector('#inputSearchItems');
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    console.log('¡Presionaste Enter!');
    searchResults();
  }
});
function setSearchCursor(){
    document.getElementById('inputSearchItems').focus();
}
function clearResults(){
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('inputSearchItems').value = "";
}

function getContryDateTime(paramZone, paramTimeZone){
    const options = { timeZone: paramTimeZone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
	const newTime = new Date().toLocaleTimeString('en-US', options);
    var concat = `<p> Current time in </p>`;
    concat += `<h2> ${paramZone} </h2>`;
    concat += `<p> ${newTime} </p>`;
    document.getElementById('mssageTimeZone').innerHTML = concat;
    showPopup(true);
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
  } else {
    document.getElementById('mssageTimeZone').innerHTML = "";
    document.getElementById('popup').style.visibility = 'hidden';
  }
}












