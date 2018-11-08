import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from '../dist/react-relax.min';
import store from './store';

import Todo from './Todo/Todo';
import Counter from './Counter/Counter';

const App = () => (
    <div>
        This is the sandbox app to test react-relax.
        <Provider store={store}>
            <Todo />
            <Counter />
        </Provider>
    </div>
);

/** HMR */
hot(module)(App);

ReactDOM.render(<App />, document.getElementById('app'));
