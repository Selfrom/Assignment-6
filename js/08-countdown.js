var num = window.prompt("Enter an integer");
num = parseInt(num);
if (num < 1) {
  document.write(num + " is too small!<br>");
}
else if (num > 1000) {
  document.write(num + " is too large!<br>");
}
else {
  for (var i = num; i >= 0; i--) {
    document.write(i + "<br>");
  }
}