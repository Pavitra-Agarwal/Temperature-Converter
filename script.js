function convertCelsiusToFahrenheit() {
  var celsiusInput = document.getElementById("celsius").value;
  var fahrenheitOutput = (celsiusInput * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheitOutput.toFixed(2);
}

function convertFahrenheitToCelsius() {
  var fahrenheitInput = document.getElementById("fahrenheit").value;
  var celsiusOutput = (fahrenheitInput - 32) * 5/9;
  document.getElementById("celsius").value = celsiusOutput.toFixed(2);
}
