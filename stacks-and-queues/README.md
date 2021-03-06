[![Build Status](https://travis-ci.com/stariel/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/stariel/data-structures-and-algorithms)

#Data Structures and Algorithms

##Stacks and Queues

This code creates two classes - one for Stacks and one for Queues. These classes create the respective data structures and creates some methods to use with them.

###Stacks

- The push(value) method adds the *value* to the last position in the stack
- The pop() method removes and returns the last item in the stack

###Queues

- The enqueue(value) adds the *value* to the last position in the queue
- The dequeue() method removes and returns the first item in the queue

###Tests

Tests can be run in node.js using npm test, or checked on Travis at the link at the top of this README.

## Implement a Queue using two Stacks 11
Implement a queue using two stacks.

## Challenge
Using two stacks and their push(val) and pop() methods, implement a queue with enqueue(val) and dequeue() methods.

## Solution
![Whiteboarding Image 11](../assets/queue_with_stacks.jpg)

## First-in, First out Animal Shelter 12
Create an AnimalShelter class which holds cats and dogs, and operates as a FIFO animal shelter.

## Challenge
Create an AnimalShelter class which holds animals - either cat or dog objects. enqueue() adds an animal to the shelter. dequeue(pref) returns the longest-waiting preferred animal (cat or dog).

## Solution
![Whiteboarding Image 12](../assets/fifo_animal_shelter.jpg)

## Multi-bracket Validation 13
Write a function which takes in a string which may contain brackets [], {}, () and determines whether the brackets are balanced.

## Challenge
multiBracketValidation(input) is a function which takes in a string which may contain brackets [], {}, (). It determines whether the brackets are balanced and returns a boolean.

## Solution
![Whiteboarding Image 13](../assets/multi-bracket-validation.jpg)

## Towers of Hanoi 14
Write a function to solve the Towers of Hanoi puzzle for n disks.

## Challenge
- The Towers of Hanoi is a mathematical puzzle where you have 3 towers and N disks of different sizes.
- The puzzle starts with the disks sorted (i.e. smaller disks sits on top of larger disks) on the left-most tower, and the objective of the puzzle is to move the disks to the right-most tower with the following restrictions:
1. Only one disk can be moved at a given time.
2. A disk is moved from the top of a tower to the top of another tower.
3. A disk can’t be placed on top of a smaller disk.

## Solution
![Whiteboarding Image 14](../assets/towers-of-hanoi.jpg)