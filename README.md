# Repository description

This repostory is about Redux and a simple second app in order to understand Redux functionality. It is a second part part of a practice module about Redux from Udemy's course `React - The Complete Guide (incl Hooks, React Router, Redux)`.

# Course URL

https://www.udemy.com/course/react-the-complete-guide-incl-redux/

# Project URL

http://redux-tutorial.nicolasfernandez.online/

# Module descriptions

- Use of `@reduxjs/toolkit` and `react-redux`
- Put in practice `store`, `actions`, `reducers` and how to apply those concepts with `@reduxjs/toolkit` through `configureStore` and `createSlice`.
- Apply multiples stores and combine them into `configureStore`.
- Where should our logic (code) go?
  - Synchronous, side effect free (i.e data transformation): The code should be placed into `reducers` avoiding to `action creators` or `Components`.
  - Asynchrous code or with side-effects: The code should be placed inside the `components` or `action creators`.
- How to connect Redux with `side effects` and `asynchronous` code.
  - How to implement when `side effects` and `asynchronous` code is necessary due to `Reducers` must be pure, side-effect free, asynchronous functions.
  - Two main options learned:
    - Inside the `components`.
    - Inside the `actions creators`.
- Use of Firebase for the data persistence.
- Use of `Thunk Action Creators`.
  - A `Thunk` is a function that delays an action until later or something else finish. An action creatir function that does NOT return the action itself but another function which eventually returns the action.
- Redux TookKits.
