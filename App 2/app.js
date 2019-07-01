const slider = document.getElementById("formControlRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
  output.innerHTML = this.value;
  const amount = document.getElementById("amount");
  const slider = document.getElementById("formControlRange");
  const resultado = document.getElementById("result");

  resultado.value = Math.ceil(parseFloat(amount.value) * 12000 / slider.value);
};

