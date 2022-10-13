var obj = {}
obj.age = 20
var i = 0
var names 



for (i=0; i<10000; i++ ){
    names='name '+ (1+Math.floor(Math.random()*1e4))
    
obj [names]=names
}

//console.log(names)   
console.log(obj)
//console.log(Objetc.entries(obj)) 

const sorted = Object.keys(obj)
.sort()
.reduce((accumulator, key ) => {
    accumulator[key] = obj[key];

    return accumulator;
}, {});
console.log(sorted);