const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// unsubscribe is never called in the code provided.  This can lead to memory leaks, especially
// if the component or function using this code unmounts or exits before explicitly unsubscribing.
// This is particularly important for listeners that continue to execute even after the component is no longer needed.