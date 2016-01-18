/**
* A basic Sigmoid Neuron
* @param {Array} inputs
* @param {Array} weights
* @param {Number} bias
*/
export function sigmoidNeuron(inputs, weights, bias) {
  return 1 / (1 + (Math.exp(negate(dotProduct(inputs, weights)) - bias)));
}


function negate(num) {
  return num * -1;
}


/**
* Computes the dot product of 2 arrays of the same length
* @param {Array} array1
* @param {Array} array2
*/
function dotProduct(array1, array2) {
  return array1.reduce((p, c, i) => {
    return p + (c * array2[i]);
  }, 0);
}
