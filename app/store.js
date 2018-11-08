import { createStore } from '@relax-js/relax';

const initialState = {
    count: 0,
};

const store = createStore({
    initialState,
});

export default store;
