# Chapter 1 - Using Neural Networks To Recognize Handwritten Digits

Neural networks are a learning system, that take a training set of data and infer rules for pattern recognition

### Perceptrons
- An artificial neuron
- It takes several binary inputs and produces a single binary output
- Can be layered to make more complex decisions
- Is tuned with a bias factor, which is measure of how easy it is for a perception to fire
- See below a NAND gate and Adder (with carry) represented by a perceptron

![Perceptron](images/perceptron.png)  
Perceptron

![NAND Adder](images/nand-adder.png)  
NAND Adder

![Perceptron Adder](images/perceptron-adder.png)  
Perceptron Adder

### Sigmoid Neurons
- For learning to occur a small change in a weight (bias) should only cause a small change in the output
- Takes an input between 0 and 1 and computes a sigmoid function
- The sigmoid function is good because it behaves like a step function, except for right around the point right around where it flips from positive to negative
- Exercises
