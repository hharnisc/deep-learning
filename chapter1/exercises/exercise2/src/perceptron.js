/**
* A basic Perceptron
* @param {Array} inputs
* @param {Array} weights
* @param {Number} bias
*/
export function perceptron(inputs, weights, bias) {
  return dotProduct(inputs, weights) + bias >= 0 ? 1 : 0;
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
