const slider = document.getElementById("formControlRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
let time = 1;

slider.oninput = function() {
  output.innerHTML = this.value;
  const amount = document.getElementById("amount");
  const slider = document.getElementById("formControlRange");
  const resultado = document.getElementById("result");
  
  if(amount.value > 0)
  resultado.value = Math.ceil(parseFloat(amount.value) * 12000 / slider.value);
  else
  {
    showError('Por favor, verifique o valor de entrada',time);

  }


};

function showError(error,times){

time = times;

if(time >0)
{
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');


  const errorDiv = document.createElement('div');

  errorDiv.className = 'alert alert-danger';

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);
  time = time - 1;
}
}

function clearError(){
  document.querySelector('.alert ').remove();
  time = time + 1;
}
