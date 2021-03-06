import React from 'react';
import PropTypes from 'prop-types';
import { connect } from '../../dist/react-relax.min';

import styles from './Todo.less';
import { fetchList } from './actions';
import { getList } from './selectors';

const Todo = ({
    list,
    ...props
}) => {
    return (
        <div>
            <div>Todo</div>
            <button onClick={props.fetchList}>Fetch List</button>
            { list.data &&
                list.data.map(item => (
                    <div key={item.id} className={styles.item}>
                        {item.year} - {item.name}
                        <div className={styles.swatch} style={{ background: item.color }} />
                    </div>
                ))
            }
        </div>
    );
};

Todo.propTypes = {
    fetchList: PropTypes.func.isRequired,
    list: PropTypes.object,
};

Todo.defaultProps = {
    list: {},
};

const mapStateToProps = state => ({
    list: getList(state),
});
const mapDispatchToProps = {
    fetchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
