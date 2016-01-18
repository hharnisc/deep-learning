import { perceptron } from "./perceptron";
import { sigmoidNeuron } from "./sigmoid-neuron";

/*

Problem Statement 2

Suppose we have the same setup as the last problem - a network of perceptrons. Suppose also that the overall input to the network of perceptrons has been chosen. We won't need the actual input value, we just need the input to have been fixed. Suppose the weights and biases are such that w⋅x+b≠0 for the input x to any particular perceptron in the network. Now replace all the perceptrons in the network by sigmoid neurons, and multiply the weights and biases by a positive constant c>0. Show that in the limit as c→∞c→∞ the behaviour of this network of sigmoid neurons is exactly the same as the network of perceptrons. How can this fail when w⋅x+b=0 for one of the perceptrons?

*/


let inputs = [1, 1, 1];
let weights = [1, 1, 1];
let bias = 1;
let constant = 1;

console.log("P - C = " + constant + ":", perceptron(inputs, weights.map((item) => item * constant), bias * constant));

console.log("S - C = " + constant + ":", sigmoidNeuron(inputs, weights.map((item) => item * constant), bias * constant));

constant = 5;

console.log("P - C = " + constant + ":", perceptron(inputs, weights.map((item) => item * constant), bias * constant));

console.log("S - C = " + constant + ":", sigmoidNeuron(inputs, weights.map((item) => item * constant), bias * constant));

constant = 10000;

console.log("P - C = " + constant + ":", perceptron(inputs, weights.map((item) => item * constant), bias * constant));

console.log("S - C = " + constant + ":", sigmoidNeuron(inputs, weights.map((item) => item * constant), bias * constant));

constant = -1;

console.log("P - C = " + constant + ":", perceptron(inputs, weights.map((item) => item * constant), bias * constant));

console.log("S - C = " + constant + ":", sigmoidNeuron(inputs, weights.map((item) => item * constant), bias * constant));

constant = -2;

console.log("P - C = " + constant + ":", perceptron(inputs, weights.map((item) => item * constant), bias * constant));

console.log("S - C = " + constant + ":", sigmoidNeuron(inputs, weights.map((item) => item * constant), bias * constant));

constant = -10000;

console.log("P - C = " + constant + ":", perceptron(inputs, weights.map((item) => item * constant), bias * constant));

console.log("S - C = " + constant + ":", sigmoidNeuron(inputs, weights.map((item) => item * constant), bias * constant));

// How can w⋅x+b=0 fail?

constant = 0;

console.log("P - C = " + constant + ":", perceptron(inputs, weights.map((item) => item * constant), bias * constant));

console.log("S - C = " + constant + ":", sigmoidNeuron(inputs, weights.map((item) => item * constant), bias * constant));

// Perceptron is pulled strong high (1) and the Sigmoid Neuron produces a more nuetral response (0.5) in the above example.
