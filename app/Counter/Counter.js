import React from 'react';
import PropTypes from 'prop-types';
import { connect } from '../../dist/react-relax.min';

import { increment } from './actions';
import { getCount } from './selectors';

const Counter = (props) => {
    return (
        <div>
            Count: {props.count}
            <button onClick={props.increment}>+</button>
        </div>
    );
};

Counter.propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func.isRequired,
};

Counter.defaultProps = {
    count: 0,
};

const mapStateToProps = state => ({
    count: getCount(state),
});

const mapDispatchToProps = {
    increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
