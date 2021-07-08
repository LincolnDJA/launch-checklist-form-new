// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         let missionTarget= document.getElementById("missionTarget");
         let randomPlanet= Math.floor(Math.random()*json.length);
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
         <li>Name: ${json[randomPlanet].name}</li>
         <li>Diameter: ${json[randomPlanet].diameter}</li>
         <li>Star: ${json[randomPlanet].star}</li>
         <li>Distance from Earth: ${json[randomPlanet].distance}</li>
         <li>Number of Moons: ${json[randomPlanet].moons}</li>
         </ol>
            <img src="${json[2].image}">
            `;
      });
   });
   let form= document.querySelector("form");
   form.addEventListener("submit", function (event) {
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
         let faultyItems= document.getElementById("faultyItems");
         let fuelStatus= document.getElementById("fuelStatus");
         let launchStatus= document.getElementById("launchStatus");
         let pilotReady= document.getElementById("pilotStatus");
         let copilotReady=document.getElementById("copilotStatus");
         let cargoStatus= document.getElementById("cargoStatus");
         
         if (pilotNameInput.value === '' || copilotNameInput.value === '' || fuelLevelInput.value === '' || cargoMassInput.value === '') {
            window.alert("All fields are required!");
            event.preventDefault();
         } else if  (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
            window.alert("Please enter valid inputs.");
            event.preventDefault();
         }   
         else {
         faultyItems.style.visibility = 'visible'
         pilotReady.innerHTML= `Pilot ${pilotNameInput.value} is ready for launch.`
         copilotReady.innerHTML= `Co-pilot ${copilotNameInput.value} is ready for launch.`
         event.preventDefault();
      };
         if(fuelLevelInput.value>= 10000) {
            fuelStatus.innerHTML= "Fuel level high enough for launch"
         } else if(fuelLevelInput.value<10000) {
           fuelStatus.innerHTML= "There is not enough fuel for this journey.";
           launchStatus.innerHTML="Shuttle not ready for launch.";
           launchStatus.style.color= 'red';
           event.preventDefault();
         
            
         }  
         if (cargoMassInput.value <= 10000) {
            cargoStatus.innerHTML= "Cargo mass low enough for launch";
         }else if(cargoMassInput.value>10000) {
            cargoStatus.innerHTML= "Cargo mass is too high for launch"
            launchStatus.innerHTML= "Shuttle not ready for launch.";
            launchStatus.style.color='red';
            event.preventDefault();
         
         }
         if(fuelLevelInput.value>= 10000 && cargoMassInput.value<=10000) {  
         launchStatus.innerHTML= "Shuttle is ready for launch.";
            launchStatus.style.color= 'green';
            event.preventDefault();
         }
      
      // pilotReady.innerHTML= `Pilot ${pilotNameInput.value} is ready for launch.`
      // copilotReady.innerHTML= `Co-pilot ${copilotNameInput.value} is ready for launch.`
      });
});