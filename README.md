### React Relax (Beta)

#### Basic Implementation
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

More documentation to come...
