import { createSelector } from 'reselect';

export const getCount = createSelector(
    state => state,
    state => state.count,
);
