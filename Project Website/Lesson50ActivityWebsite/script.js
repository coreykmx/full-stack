let pokemon;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.134.254:8400";
  let route= "/pokemon"
  pokemon = $.getJSON(link+route).responseJSON;

  generateCards(pokemon);

}

function generateCards(pokemon){

  let mainpanel = document.getElementById("output");
  let build ="";

   
  for(let i=0; i<pokemon.length; i++){
    let pokemon1 = pokemon[i]
    build += `<div class="flip-card" >`;
	build += `<div class="flip-card-inner">`;
	build += `<div class="flip-card-front">`;
    build += `<h3> Pokemon Name: ${pokemon1.Name}</h3>`;
    build += `<p> Dex Number : ${pokemon1["Dex number"]}</p>`;
    build += `<p>Type : ${pokemon1.Types}</p>`;
    build += `<p> Species : ${pokemon1.Species}</p>`;
	build += `</div>`;
	build += `<div class="flip-card-back">`;
    build += `<img src="${pokemon1.Picture}">`;
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

  let newName = []; //create a list of songs searched for
  
  for(let i=0; i<pokemon.length;i++){
    let pokemon2 = pokemon[i] //get each 
	let pokemon3 = pokemon[i].Name //get each 
    //make sure the list is no
    if( pokemon3.startsWith(name)) {
          //add to the new list
          newName.push(pokemon2);
       }
  }
  console.log(`number found ${newName.length}`)
  generateCards(newName);
  
}