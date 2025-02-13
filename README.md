# Firebase Authentication Unsubscribe Issue

This repository demonstrates a common issue encountered when using Firebase's `onAuthStateChanged` method.  Failure to properly unsubscribe from the listener can lead to memory leaks, especially in applications with many listeners.

## Problem

The provided `authBug.js` demonstrates a listener that is attached but not properly unsubscribed.  When the component using this code unmounts or the function exits, the listener remains active, consuming resources and potentially causing memory issues.

## Solution

The `authSolution.js` file presents a corrected version.  The listener is attached using a `useEffect` hook (in React), ensuring that the `unsubscribe` function is called when the component unmounts. This prevents the memory leak.

## Usage

1. Clone this repository.
2. Install dependencies (if using React): `npm install`
3. Run the code to observe the behavior of both the buggy and corrected versions.