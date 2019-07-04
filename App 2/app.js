document  .getElementById("term-form").addEventListener("submit", calculateResults);


function calculateResults(e) {
  const amount = document.getElementById("amount");
  const nodeList = document.querySelectorAll("td");
  console.log(nodeList);

  for (i = 0; i < 11; i++) {
    nodeList[i].innerHTML = Math.ceil((amount.value * 12000) / (15 + i));    
  }
  e.preventDefault();

  document.getElementById('table').style.display = 'table';
  document.getElementById('inputfactor').style.display = 'block';
  const factor = document.getElementById("factor");

  if(factor.value > 0)
  {
  console.log(factor.value);
  const fatorTabela = document.getElementById("fac");
  const resultadoTabela = document.getElementById("fac2");
  fatorTabela.innerHTML = factor.value;
  resultadoTabela.innerHTML = Math.ceil((amount.value * 12000) / (factor.value));
}
}


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
