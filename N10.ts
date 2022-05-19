function reversedNum(num) {
  return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )                 
}
let numero: number= +prompt("Inserisci N");
let ninv: number= reversedNum(numero);
console.log(numero-ninv);
