var coinFlip = Math.round(Math.random()); // 0 is heads, 1 is tails
var choice = window.prompt("Please call the coin flip. Please enter either H or T.");

if (choice === "H"){
  if (!coinFlip){
    window.alert("The flip was heads and you chose heads...you win!");
  }
  else {
    window.alert("The flip was tails but you chose heads...you lose!");
  }
}
else if (choice === "T") {
  if (!coinFlip){
    window.alert("The flip was heads but you chose tails...you lose!");
  }
  else {
    window.alert("The flip was tails and you chose tails...you win!");
  }
}
else {
  window.prompt("Invalid response. Please refresh the page to try again.")
}
