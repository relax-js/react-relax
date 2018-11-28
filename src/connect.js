import React from 'react';

import RelaxContext from './context';
import shallowEqual from './utils/shallowEqual';

const mapDispatchToProps = (memory, store, actions) => (
    Object.keys(actions || {}).reduce((accum, key) => {
        if (!memory.actions[key]) {
            memory.actions[key] = (...args) => store.dispatch(actions[key](...args)); // eslint-disable-line
        }

        return {
            ...accum,
            [key]: memory.actions[key],
        };
    }, {})
);

const connect = function connect(stateToProps, actions) {
    const memory = {
        actions: {},
        props: {},
    };

    return (Child) => {
        const Connect = (props) => {
            const Context = props.context || RelaxContext;

            return (
                <Context.Consumer>
                    { ({ store }) => {
                        const state = store.getState();

                        // Map Props
                        const newProps = {
                            ...(stateToProps && stateToProps(state, props)),
                            ...mapDispatchToProps(memory, store, actions),
                            ...props,
                            dispatch: store.dispatch,
                        };

                        // If props have changed, store current state and rerender component
                        if (!shallowEqual(memory.props, newProps)) {
                            memory.props = newProps;
                            memory.child = (
                                <Child {...memory.props} />
                            );
                        }

                        // Return child component - same or new
                        return memory.child;
                    }}
                </Context.Consumer>
            );
        };

        return Connect;
    };
};

export default connect;
