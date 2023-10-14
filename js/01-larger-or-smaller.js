var num1 = window.prompt("Enter an integer");
num1 = parseInt(num1);
var num2 = window.prompt("Enter another integer");
num2 = parseInt(num2);

if (num1 > num2) {
  document.write(num1 + "<br>");
}
else if (num2 > num1) {
  document.write(num2 + "<br>");
}