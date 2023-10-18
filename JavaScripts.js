var fact = document.getElementById('funFact');



function changefact(){
  if (fact.innerHTML.match("Click the button for the first fun fact!")){
    fact.innerHTML = "FIRST FACT";
    fact.style.backgroundColor = "#ff00a8"

  }
  else if (fact.innerHTML.match("FIRST FACT")){
    fact.innerHTML = "SECOND FACT";
    fact.style.backgroundColor = "#ff3184"
  }
  else if (fact.innerHTML.match("SECOND FACT")){
    fact.innerHTML = "What even is a fact?!?!?!";
    fact.style.backgroundColor = "#ff5a66"
  }
  else if (fact.innerHTML.match("What even is a fact?!?!?!")){
    fact.innerHTML = "wow";
    fact.style.backgroundColor = "#ff7d52"
  }
  else{
    fact.innerHTML = "The Chief Extra Oatmeal";
    fact.style.background= "#ff9c49"
  }
  }

  