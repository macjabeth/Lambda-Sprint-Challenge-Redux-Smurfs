_Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?_

- `Array.filter`
- `Array.map`
- `Array.reduce`

We can use `Object.assign` to create new objects whilst extending the properties of another object.

_Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?_

- Actions return object literals which contain the type of action being dispatched. Whenever you interact with the UI of your app in some way, you'd want to dispatch an action to update the state.
- Reducers capture each action that is being passed through dispatch and return the updated state of the application.
- The store itself is what holds the application state, reducer methods and dispatch handler. It is known as the single source of truth because it is the only means in which you can update your application state.

_What is the difference between Application state and Component state? When would be a good time to use one over the other?_

- Application state refers to the global state of the application across many components.
- Component state handles local state in a component for things like input values or any data that isn't needed by the application as a whole.

_What is middleware?_

Middleware is essentially a function that intercepts an action being passed through dispatch before it reaches the reducer. It can handle that data however it wants and then decide whether or not to pass the action through to the reducer when it's done (using the `next()` function).

_Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?_

Thunk allows us to make asynchronous requests in our action creators by passing the dispatch method as the second argument in a higher-order function. It changes the way we build our action creators because we have to handle three separate states: start, success and failure of the async request.

_Which `react-redux` method links up our `components` with our `redux store`?_

The `connect()` method links up our components with the redux store.
