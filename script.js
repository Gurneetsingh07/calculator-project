let display = document.getElementById("display");
function appendValue(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    let result = eval(display.value);
    if (result === Infinity || isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = parseFloat(result.toFixed(10));
    }
  } catch (error) {
    display.value = "Error";
  }
}
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
