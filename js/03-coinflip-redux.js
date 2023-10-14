var coinFlip;

for (var i = 0; i < 10; i++) {
  coinFlip = Math.round(Math.random()); // 0 is heads, 1 is tails
  document.write((coinFlip?"Tails":"Heads") + "<br>");
  
}