import { createSelector } from 'reselect';

export const getList = createSelector(
    state => state,
    state => state.list,
);
