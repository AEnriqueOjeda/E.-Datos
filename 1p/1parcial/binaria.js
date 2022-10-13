let array = new Array(10000) //hola es nuevo esto
let length = array.length
var k = 0
for (let i = 0; i < array.length; i++) {
  array[i] = Numg(array.length)
}
function Numg(a) {
  return Math.floor(Math.random() * a + 1)
}
array.sort()
binarySearch = function (item){
  
var low = 0,   
high = array.length - 1, 
mid, element;
  
while (low <= high){ 
    mid = Math.floor((low + high) / 2); 
    element = array[mid]; 
    k++
if (element < item) { 
    low = mid + 1; 
} else if (element > item) { 
    high = mid - 1; 
} else {
    return mid; 
    }
}
    return 'NO EXISTE'; 
};
x = Math.floor(Math.random()*10000)
console.log(array)
console.log(x , 'esta en la posicion', binarySearch(x))
console.log(k, 'pasos')


////////////////////////////////////////////////////


let array1 = new Array(100000)
var k1 = 0
for (let i1 = 0; i1 < array1.length; i1++) {
  array[i1] = Numbers1(array1.length)
}
function Numbers1(a1) {
  return Math.floor(Math.random() * a1 + 1)
}
array1.sort()

binarySearch1 = function (item1){
  
var low1 = 0,   
high1 = array1.length - 1, 
mid1, element1;
  
while (low1 <= high1){ 
    mid1 = Math.floor((low1 + high1) / 2); 
    element1 = array1[mid1]; 
    k1++
if (element1 < item1) { 
    low1 = mid1 + 1; 
} else if (element1 > item1) { 
    high1 = mid1 - 1; 
} else {
    return mid1; 
    }
}
    return 'NO EXISTE'; 
};
x1 = Math.floor(Math.random()*10000)
console.log(array1)
console.log(x1 , 'esta en la posicion', binarySearch1(x1))
console.log(k1, 'pasos')
//console.log(t21 - t11, 'ms');

//////////////////////////////////////////////////

let array2 = new Array(1000000)
var k2 = 0

for (let i2 = 0; i2 < array2.length; i2++) {
  array2[i2] = gNumbers2(array2.length)
}
function gNumbers2(a2) {
  return Math.floor(Math.random() * a2 + 1)
}
array2.sort()
binarySearch2 = function (item2){
  
let low2 = 0,   
high2 = array2.length - 1, 
mid2, element2;
  
while (low2 <= high2){ 
    mid2 = Math.floor((low2 + high2) / 2); 
    element2 = array2[mid2]; 
    k2++
if (element2 < item2) { 
    low2 = mid2 + 1; 
} else if (element2 > item2) { 
    high2 = mid2 - 1; 
} else {
    return mid2; 
    }
}
    return 'NO EXISTE'; 
};

x2 = Math.floor(Math.random()*10000)
console.log(array2)
console.log(x2 , 'esta en la posicion', binarySearch2(x2))
console.log(k2, 'pasos')
