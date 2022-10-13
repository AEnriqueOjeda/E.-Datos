let p= 32, i = 1, numeros = [];

function primo(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
}
for (; i < p; i++) {
  if (primo(i)) {
    numeros.push(i);
  } 
}
console.log(numeros);


