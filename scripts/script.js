function insert(value) {
   var resultado = document.getElementById("resultado");
   var display = resultado.innerHTML;
   
   // Verificar se o número de caracteres excede o limite desejado
   if (display.length >= 15) {
   return; 
   // Não fazer mais nada se o limite for atingido
   }
   
   resultado.innerHTML += value;
}

function clean() {
   document.getElementById('resultado').innerHTML = ""
}

function back() {
   var resultado = document.getElementById('resultado').innerHTML; 
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
   var resultado = document.getElementById('resultado').innerHTML;
   if(resultado) {
      document.getElementById('resultado').innerHTML = eval(resultado);
   }
   else {
      document.getElementById('resultado').innerHTML = "Nada....";
   }
}
