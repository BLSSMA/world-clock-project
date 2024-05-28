function updateTime(){

let losAngelesElement = document.querySelector("#losangeles");
if (losAngelesElement){
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML= losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML= losAngelesTime.format("h:mm:ss[<small>]a[</small>]");
}

let parisElement = document.querySelector("#paris");
if(parisElement){
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML= parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML= parisTime.format("h:mm:ss[<small>]a[</small>]");
}
}
    updateTime();
    setInterval(updateTime, 1000);

   
    function updateCity(event){

    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTimeElement = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
    `<div class="cities">
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date" id="date">${cityTimeElement.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time" id="time">${cityTimeElement.format("h:mm:ss")}<small>${cityTimeElement.format("A")}</small></div>
        </div>`;
    }
    let citiesSelect = document.querySelector("#choose-city");
    citiesSelect.addEventListener("change", updateCity);
    
