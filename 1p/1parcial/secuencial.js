let array = new Array(10000)
var k = 0;
var t1 = performance.now()
var z = 0
var z1 = 0
var z2;
for (let i = 0; i < array.length; i++) {
  array[i] = Numg(array.length)
}
function Numg(a) {
  return Math.floor(Math.random() * a + 1)
}
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] == array[j]) {
      z++
    }
    if (z > z1) {
      z1 = z//3
      z2 = array[i]
    }
    
  }
  z = 0
  
  k++
}
let t2 = performance.now()
console.log(array)
console.log(z2)
console.log(k, 'pasos');

////////////////////////////////////

let arraya = new Array(100000)
let lengtha = arraya.length
var ka = 0;
var t1a = performance.now()
var za = 0
var z1a = 0
var z2a;
for (let ia = 0; ia < arraya.length; ia++) {
  arraya[ia] = Numga(arraya.length)
}
for (let ia = 0; ia < arraya.length; ia++) {
  for (let ja = 0; ja < arraya.length; ja++) {
    if (arraya[ia] == arraya[ja]) {
      za++
    }
    if (za > z1a) {
      z1a = za//3
      z2a = arraya[ia]
    }
    
  }
  za = 0
  
  ka++
}
function Numga(aa) {
  return Math.floor(Math.random() * aa + 1)
}
let t2a = performance.now()
console.log(arraya)
console.log(z2a)
console.log(ka, 'pasos');

//////////////////////////////////////

let arrayab = new Array(1000000)
let lengthab = arrayab.length
var kab = 0;
var t1ab = performance.now()
var zab = 0
var z1ab = 0
var z2ab;
for (let iab = 0; iab < arrayab.length; iab++) {
  arrayab[iab] = Numgab(arrayab.length)
}
for (let iab = 0; iab < arrayab.length; iab++) {
  for (let jab = 0; jab < arrayab.length; jab++) {
    if (arrayab[iab] == arrayab[jab]) {
      zab++
    }
    if (zab > z1ab) {
      z1ab = zab//3
      z2ab = arrayab[iab]
    }
    
  }
  zab = 0
  
  kab++
}

function Numgab(aab) {
  return Math.floor(Math.random() * aab + 1)
}
let t2ab = performance.now()
console.log(arrayab)
console.log(z2ab)
console.log(kab, 'pasos');