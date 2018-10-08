import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

class Provider extends Component {
    constructor(props) {
        super(props);

        const { store } = props;
        this.state = {
            store: {
                getState: store.getState,
                dispatch: (...args) => this.updateState(store, store.dispatch(...args)),
                subscribe: store.subscribe,
            },
            storeState: store.getState(),
        };
    }

    updateState = (store, fn) => (
        fn.then((params) => {
            this.setState({
                store: {
                    ...this.state.store,
                },
                storeState: store.getState(),
            });

            return params;
        })
    )

    render() {
        return (
            <Context.Provider value={this.state.store}>
                { this.props.children }
            </Context.Provider>
        );
    }
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
    store: PropTypes.object.isRequired,
};

export default Provider;
