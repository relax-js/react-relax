const shallowEqual = (a, b) => {
    if (a === b) return true;

    if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false;

    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    let i = 0;
    for (i; i < aKeys.length; i += 1) {
        const key = aKeys[i];
        if (!bKeys.includes(key) || a[key] !== b[key]) return false;
    }

    return true;
};

export default shallowEqual;
