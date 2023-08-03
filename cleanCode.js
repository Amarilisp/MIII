// function P(n) {
//   if (n < 2) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// // Teste a função
// console.log(P(7)); // Saída esperada: true
// console.log(P(12)); // Saída esperada: false

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Teste a função
console.log(isPrime(7)); // Saída esperada: true
console.log(isPrime(12)); // Saída esperada: false
console.log(isPrime(2)); // Saída esperada: true
console.log(isPrime(15)); // Saída esperada: false
