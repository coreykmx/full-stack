let pokemon;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.134.254:8400";
  let route= "/trainers"
  trainer = $.getJSON(link+route).responseJSON;

  generateCards(trainer);

}

function generateCards(trainer){

  let mainpanel = document.getElementById("output1");
  let build ="";

   

  for(let i=0; i<trainer.length; i++){
    let trainers = trainer[i]
    build += `<div class="flip-card" >`;
	build += `<div class="flip-card-inner">`;
	build += `<div class="flip-card-front">`;
    build += `<h3>Trainer Name: ${trainers.Name}</h3>`;
    build += `<p>Gender ${trainers.Gender}</p>`;
    build += `<p>Affiliation : ${trainers.Affiliation}</p>`;
	build += `</div>`;
	build += `<div class="flip-card-back">`;
    build += `<img src="${trainers.Selfie}">`;
	build += `</div>`;
    build += `<hr>`;
	build += `</div>`;
    build += `</div>`;
  }
  
  mainpanel.innerHTML = build;
  
}

function filter(){
  let name = document.getElementById("name").value;
  console.log(name);

  let newName = []; //create a list of names searched for
  
  for(let i=0; i<trainer.length;i++){
    let trainers1 = trainer[i] //get each sog
	let trainers2 = trainer[i].Name //get each sog
    //make sure the list is no
    if( trainers2.startsWith(name) ) {
          //add to the new list
          newName.push(trainers1);
       }
  }
  console.log(`number found ${newName.length}`)
  generateCards(newName);
  
}