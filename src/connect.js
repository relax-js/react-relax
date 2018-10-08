import React from 'react';
import Context from './context';

const mapDispatchToProps = (store, actions) => (
    Object.keys(actions || {}).reduce((accum, key) => ({
        ...accum,
        [key]: (...args) => connectDispatch(store, actions[key](...args)),
    }), {})
);

const connect = function connect(stateToProps, actions) {
    return (Child) => {
        const Connect = props => (
            <Context.Consumer>
                { (store) => {
                    let mappedProps = {};

                    const state = store.getState();
                    mappedProps = {
                        dispatch: actionParams(store, connectDispatch).dispatch,
                        ...(stateToProps && stateToProps(state, props)),
                        ...mapDispatchToProps(store, actions),
                        ...props,
                    };

                    return (
                        <Child {...mappedProps}/>
                    );
                }}
            </Context.Consumer>
        );

        return Connect;
    };
};

export default connect;