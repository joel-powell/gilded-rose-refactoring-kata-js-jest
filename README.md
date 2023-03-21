# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

## Approach

My approach for this kata was to start by writing a complete passing test suite for the current code.

I could then use this test suite to test drive a cleaner implementation from the ground up with clearer control flow.

Once I had refactored the existing solution, I could easily test drive adding the new item case.

## Code Structure

My first major change was using a forEach loop rather than a for loop as this is a cleaner way to iterate through an
array of items.

As the code would be checking for name matches to apply edge case rules I thought a switch statement would be perfect
for this.

In order to keep nesting to a minimum I decided to use single line if statements as essentially guard-clauses, this
makes it much easier to follow the control flow.

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```
