import { perceptron } from "./perceptron";
/*

Problem Statement 1

Suppose we take all the weights and biases in a network of perceptrons, and multiply them by a positive constant, c > 0. Show that the behaviour of the network doesn't change.

*/

// Lets just try this with one perceptron

let inputs = [1, 1, 1];
let weights = [1, 1, 1];
let bias = 1;
let constant = 1;

console.log("C = " + constant + ":", perceptron(inputs, weights.map((item) => item * constant), bias * constant));

constant = 5;

console.log("C = " + constant + ":", perceptron(inputs, weights.map((item) => item * constant), bias * constant));

constant = 100;

console.log("C = " + constant + ":", perceptron(inputs, weights.map((item) => item * constant), bias * constant));
