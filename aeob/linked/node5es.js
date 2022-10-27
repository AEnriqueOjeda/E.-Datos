export { Linked, Node }

import Node from './node.js'

function Linked(n) {//node
  this.head = n
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.IAfter = IAfter
  this.IBefore = IBefore
  this.tail = n
  this.size = 1
  this.getHead = getHead
  this.prepend = prepend
  
}

function IAfter(ea, lo) {
  let c = this.head, help; 
  while (c) {
    if (ea == c.data) {
      help = c.next
      c.next = lo
      lo.next = help
      console.log('\n')
    } 
    c = c.next
  }
} 

function IBefore(ea, lo) {
  let c = this.head, ant, help
  if (c.next == null) {
    this.prepend(lo)
  } 
  else {
    if (ea != this.head.data) {
      while (c) {
        if (ea != c.data) {
          ant = c
         
        } 
        else {
          help = ant.next
          ant.next = lo
          lo.next = help
        }
        c = c.next
      }    console.log('\n') 
    } 
    else {
      this.prepend(o)
    }
  }
}

export function getHead() {
  return this.head
}

export function prepend(num) {
  num.next = this.head
  this.head = num
  this.size++
}

export function append(num) {
  num.next = null
  this.tail.next = num
  this.tail = num
  this.size++
}

export function traverse() {
  let c = this.head
  while (c) {
    console.log(c.data)
    c = c.next
  }
}

export function contains(value) {
  let count = this.head, enc = " ";
  while (count) {
    if (value == count.data) {
      enc = count.data
    }
    count = count.next
  }
  if (enc == value) {
    return 'Elemento ' + enc + ' encontrado'
  } 
  else {
    return 'Elemento no encontrado'
  }
}

export function getTail() {
  let c = this.head
  var t = " "
  while (c) {
    t = c.data
    c = c.next
  } 
  return t
}

