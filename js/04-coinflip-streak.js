var coinFlip;

do {
  coinFlip = Math.round(Math.random()); // 0 is heads, 1 is tails
  document.write((coinFlip?"Tails":"Heads") + "<br>");
} while (!coinFlip)