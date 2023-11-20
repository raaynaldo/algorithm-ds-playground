const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

// Max/Min Priority Queue
const arr = [10, 22, 4, 5, 21, 8, 9, 59];

const numbersMinQueue = new MinPriorityQueue();
const numbersMaxQueue = new MaxPriorityQueue();

for (const num of arr) {
  numbersMinQueue.enqueue(num);
  numbersMaxQueue.enqueue(num);
}

console.log("numbersMinQueue", numbersMinQueue.toArray());
console.log("numbersMaxQueue", numbersMaxQueue.toArray());

// Max/Min Priority Queue with Option
const heightArr = [
  { name: "John", height: 170 },
  { name: "Jane", height: 160 },
  { name: "Bob", height: 150 },
  { name: "Mary", height: 180 },
];

const heightQueue = new MinPriorityQueue({
  priority: (person) => person.height,
});

for (const height of heightArr) {
  const a = heightQueue.enqueue(height);
}

console.log("heightQueue", heightQueue.toArray());

// Priority Queue
const ageArr = [
  { name: "John", age: 33 },
  { name: "Jane", age: 42 },
  { name: "Jack", age: 16 },
  { name: "Jill", age: 35 },
  { name: "Jessica", age: 33 },
];
const ageQueue = new PriorityQueue({
  compare: (a, b) => {
    if (a.age < b.age) {
      return -1;
    } else if (a.age > b.age) {
      return 1;
    } else {
      return b.name.localeCompare(a.name);
      // or
      // return b.name > a.name ? 1 : -1;
    }
  },
});

for (const person of ageArr) {
  ageQueue.enqueue(person);
}

// enqueue
const newAge = { name: "Monica", age: 27 };
const heap = ageQueue.enqueue(newAge);
console.log(heap);
console.log(heap.toArray());

// dequeue
const topPriority = heap.dequeue();
console.log(topPriority);

// Proof of the return `.enqueu()` is just refering to the original heap
console.log(heap.toArray());
console.log(ageQueue.toArray());

// size
console.log(ageQueue.size());

// isEmpty
console.log(ageQueue.isEmpty());

// front
console.log(ageQueue.front());

// back
console.log(ageQueue.back());

// clear
console.log(ageQueue.clear());
