# React Native FlatList KeyExtractor Bug

This repository demonstrates a common error encountered when using the `FlatList` component in React Native: providing incorrect keys in the `keyExtractor` function.  The `keyExtractor` function must return a unique string or number for each item in the `data` array.

## Bug
The `bug.js` file shows the problematic code.  Using the object itself as a key results in a warning or crash.

## Solution
The `bugSolution.js` file shows the corrected code.  The solution uses the `id` property of each object to generate a unique string key.