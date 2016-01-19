import { sigmoidNeuron } from "./sigmoid-neuron";
/*
There is a way of determining the bitwise representation of a digit by adding an extra layer to the three-layer network above. The extra layer converts the output from the previous layer into a binary representation, as illustrated in the figure below. Find a set of weights and biases for the new output layer. Assume that the first 3 layers of neurons are such that the correct output in the third layer (i.e., the old output layer) has activation at least 0.99, and incorrect outputs have activation less than 0.01.
*/

let bias = 0.0;

// perfect output from the old output neuron layer
let inputs = {
  0: [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  1: [0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  2: [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  3: [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  4: [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  5: [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0],
  6: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0],
  7: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],
  8: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0],
  9: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0]
};

// first binary digit weights
let firstWeights = [-5.0, 5.0, -5.0, 5.0, -5.0, 5.0, -5.0, 5.0, -5.0, 5.0];

console.log("******");
console.log("First Binary Digit");
for (var i = 0; i <= 9; i++) {
  console.log("Input Num:", i, " - Output:", sigmoidNeuron(inputs[i], firstWeights, bias));
}
console.log("******");

let secondWeights = [-5.0, -5.0, 5.0, 5.0, -5.0, -5.0, 5.0, 5.0, -5.0, -5.0];

console.log("******");
console.log("Second Binary Digit");
for (var i = 0; i <= 9; i++) {
  console.log("Input Num:", i, " - Output:", sigmoidNeuron(inputs[i], secondWeights, bias));
}
console.log("******");

let thirdWeights = [-5.0, -5.0, -5.0, -5.0, 5.0, 5.0, 5.0, 5.0, -5.0, -5.0];

console.log("******");
console.log("Third Binary Digit");
for (var i = 0; i <= 9; i++) {
  console.log("Input Num:", i, " - Output:", sigmoidNeuron(inputs[i], thirdWeights, bias));
}
console.log("******");

let fourthWeights = [-5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -5.0, 5.0, 5.0];

console.log("******");
console.log("Forth Binary Digit");
for (var i = 0; i <= 9; i++) {
  console.log("Input Num:", i, " - Output:", sigmoidNeuron(inputs[i], fourthWeights, bias));
}
console.log("******");
