### React Relax

[![npm version](https://badge.fury.io/js/%40relax-js%2Freact-relax.svg)](https://badge.fury.io/js/%40relax-js%2Freact-relax)

Use this library in conjunction with [Relax](https://github.com/relax-js/relax) to manage the state of your app. You will need to provide the Relax store to `Provider` and grab values from state with `connect`. These are explained below.

#### Provider
Use `Provider` at the root level of your app. Pass it your Relax store like this:
```jsx
import { createStore } from '@relax-js/relax';
import { Provider } from '@relax-js/react-relax';

const store = createStore();

const App = () => (
    <Provider store={store}>
        ...
    </Provider>
);
```

#### Connect
Use `connect` in any child component to assign properties from state to component props.
```jsx
import { connect } from '@relax-js/react-relax';
import { incrementCount } from './actions';

const Count = (props) => (
    <div>
        Count: { props.count }
        <button onClick={props.incrementCount}>Increment</button>
    </div>
)

const mapStateToProps = state => ({
    count: state.count,
});

const mapDispatchToProps = {
    incrementCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
```
`connect` accepts a function as it's first parameter which is provided the Relax `state` and is expected to return an object of props you construct.

It accepts an object as the second parameter, which contains a key/value pair of your actions (I used ES6 shorthand in the example above). What this does is wrap each action in `store.dispatch` so when your action is called the return value is routed through dispatch and updates the state.

The `Provider` is then updated with the new state and triggers a re-render to the child components. This is managed via React so a re-render will **only** happen when props have been updated for the child component.

From the [React Documentation](https://reactjs.org/docs/react-component.html#render):
```
render() will not be invoked if shouldComponentUpdate() returns false.
```