/** 
 *
 * your solution here
 *
 */ 
//escribe algo ahi


function Queue() {
    this.dataStore = []

    this.enqueue= function(element) {
	this.dataStore.push(element)
    }


  ///////////
    this.enqueue= function(element) {
      if(this.full()){
        console.log("The queue is full")
      }
      else{
        this.dataStore.push(element)

      }
  ////////////////
    this.dequeue= function() {
	return this.dataStore.shift()
    }

    this.front= function() {
	return this.dataStore[0]
    }

    this.back= function() {
	return this.dataStore[this.dataStore.length-1]
    }

    this.toString= function() {
	let retStr = ""
	for (let i = 0; i < this.dataStore.length; ++i) {
	    retStr += this.dataStore[i] + "\n"
	}
	return retStr
    }

    this.empty= function() {
	if (this.dataStore.length == 0)
	    return true	
	else 
	    return false
	
    }

//    this.full= function() {
//  if (this.dataStore.length == 5)
//      console.log('La fila está llena')
//  else (console.log('La fila esta vacía aún'))
//}


//
// test program
//
let q = new Queue()
q.enqueue("Meredith")
q.enqueue("Cynthia")
q.enqueue("Jennifer")

console.log(q.toString())

console.log("Front of queue: " + q.front())
console.log("Back of queue: " + q.back())

q.dequeue()
console.log(q.toString())
console.log('is done')