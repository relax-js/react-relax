import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RelaxContext from './context';

class RelaxProvider extends Component {
    constructor(props) {
        super(props);

        const { store } = props;

        this.state = {
            store: {
                dispatch: (...args) => this.updateState(store.dispatch(...args)),
                getState: store.getState,
                subscribe: store.subscribe,
            },
            storeState: store.getState(),
        };
    }

    /**
     * Callback to dispatch.
     * Update state if changed.
     * Expect promise which Relax should always return from dispatch
     */
    updateState = fn => (
        fn.then((params) => {
            if (this.state.storeState !== params.state) {
                this.setState({
                    storeState: params.state,
                });
            }

            return params;
        })
    );

    render() {
        const Context = this.props.context || RelaxContext;

        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        );
    }
}

RelaxProvider.propTypes = {
    children: PropTypes.node.isRequired,
    context: PropTypes.object,
    store: PropTypes.object.isRequired,
};

export default RelaxProvider;
