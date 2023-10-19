
var BGindex = 0

setInterval(changeBG, 1500);


function changeBG(){
if (BGindex == 0){
BGindex = BGindex+1
aboutMeTitle.style.backgroundColor = "#ff00a8"
}
else if (BGindex == 1){
  BGindex = BGindex+1
  aboutMeTitle.style.backgroundColor = "#ff0d93"
}
else if (BGindex == 2){
  BGindex = BGindex+1
  aboutMeTitle.style.backgroundColor = "#ff2b7e"
}
else if (BGindex == 3){
  BGindex = BGindex+1
  aboutMeTitle.style.backgroundColor = "#ff466a"
}
else if (BGindex == 4){
  BGindex = BGindex+1
  aboutMeTitle.style.backgroundColor = "#ff6156"
}
else if (BGindex == 5){
  BGindex = BGindex+1
  aboutMeTitle.style.backgroundColor = "#ff7a42"
}
else if (BGindex == 6){
  BGindex = BGindex+1
  aboutMeTitle.style.backgroundColor = "#ff922e"
}
else if (BGindex == 7){
  BGindex = BGindex+1
  aboutMeTitle.style.backgroundColor = "#ffa818"
}
else if (BGindex == 8){
  BGindex = BGindex+1
  aboutMeTitle.style.backgroundColor = "#ffbe00"
}
else if (BGindex == 9){
  BGindex = BGindex+1
  aboutMeTitle.style.backgroundColor = "#ffd200"
}
else {
  BGindex = 0
}



}


var index = 0

function changeFact(){
    var fact = document.getElementById('funFact');
    var factDiv = document.getElementById('factDiv')
  if (index == 0){
    fact.innerHTML = "I've raised hundreds of mantis babies into adults and set them loose upon the world (my garden). I started doing this when I was six years old and I did it for many years in a row. I still see mantids in the garden every spring, and they're one of my favorite bugs!";
    factDiv.style.backgroundColor = "#ff00a8"
    fact.style.color = "white"
    index = index+1
  }
  else if (index == 1){
    fact.innerHTML = "Speaking of favorite bugs, here are my personal top 5! Tailless whip scorpion, Mantids (all types but I adore Metallyticus), Jumping spiders, Pill Millipedes (which are a perfect harmony of millipedes and pill bugs), and Weevils.";
    factDiv.style.backgroundColor = "#ff0d93"
    fact.style.color = "white"
    index = index+1
  }
  else if (index == 2){
    fact.innerHTML = "My favorite video game character is Kirby, but my favorite game is not a Kirby game! My favorite video game is Minecraft, followed shortly by Webbed, Celeste, and Hitman.";
    factDiv.style.backgroundColor = "#ff2b7e"
    fact.style.color = "white"
    index = index+1
  }
  else if (index == 3){
    fact.innerHTML = "I lived in Japan for a month and once, while on a train, I saw a woman leave her umbrella on the seat. I picked it up and followed her out to give it back, but once I had found her the train was gone. She thanked me and said something, gesturing towards the (lack of) train. I assume she was saying something about the fact that I missed the train and now I have to wait, but since I don't speak very good Japanese, I just said 'ok' (I meant 'it's okay' but close enough) and walked away. I hope that lady is alright.";
    factDiv.style.backgroundColor = "#ff466a"
    fact.style.color = "white"
    index = index+1
  }
  else{
    fact.innerHTML = "You've read all the facts! Click the button to start again";
    factDiv.style.background= "#ff6156"
    fact.style.color = "white"
    index = 0
  }
  }

  