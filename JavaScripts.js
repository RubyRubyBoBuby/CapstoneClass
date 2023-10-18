




function changeFact(){
    var fact = document.getElementById('funFact');
    var factDiv = document.getElementById('factDiv')
  if (fact.innerHTML.match("Click the button for the first fun fact!")){
    fact.innerHTML = "FIRST FACT";
    factDiv.style.backgroundColor = "#ff00a8"
    fact.style.color = "white"
  }
  else if (fact.innerHTML.match("FIRST FACT")){
    fact.innerHTML = "SECOND FACT";
    factDiv.style.backgroundColor = "#ff3184"
    fact.style.color = "white"
  }
  else if (fact.innerHTML.match("SECOND FACT")){
    fact.innerHTML = "THIRD FACT";
    factDiv.style.backgroundColor = "#ff5a66"
    fact.style.color = "white"
  }
  else if (fact.innerHTML.match("THIRD FACT")){
    fact.innerHTML = "FOURTH FACT";
    factDiv.style.backgroundColor = "#ff7d52"
    fact.style.color = "white"
  }
  else{
    fact.innerHTML = "You've read all the facts! Click the button to start again";
    factDiv.style.background= "#ff9c49"
    fact.style.color = "white"
  }
  }

  