import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { createStore } from '@relax-js/relax';
import { Provider } from '@relax-js/react-relax';

import Todo from './Todo/Todo';

const store = createStore();

const App = () => (
    <div>
    This is the sandbox app to test react-relax.
    <Provider store={store}>
        <Todo />
    </Provider>
    </div>
);

/** HMR */
hot(module)(App);

ReactDOM.render(<App />, document.getElementById('app'));
