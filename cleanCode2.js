function fatorial(n) {
  if (n === 0) return 1;
  else return n * fatorial(n - 1);
}

// Teste a função
console.log(fatorial(5)); // Saída esperada: 120
console.log(fatorial(0)); // Saída esperada: 1
console.log(fatorial(10)); // Saída esperada: 3628800

function calcularFatorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * fatorial(number - 1);
  }
}
// Teste a função
console.log(fatorial(5)); // Saída esperada: 120
console.log(fatorial(0)); // Saída esperada: 1
console.log(fatorial(10)); // Saída esperada: 3628800
