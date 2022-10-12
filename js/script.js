let kmPercorsi = i = 0; i <= 1000; {
  console.log(i);
}
let anniCliente = i = 0; i <= 1000; {
  console.log(i);
}


  var km = prompt("Quanti Km vuole percorrere?");
  var anni = prompt("Quanti anni hai");
  output = `
    Km da percorrere: ${kmPercorsi} <br>
    I suoi anni: ${anniCliente}
  `
  document.getElementById("output").innerHTML = output