export const fetchList = () => (
    fetch('https://reqres.in/api/unknown')
        .then(data => data.json())
        .then(list => ({
            list,
        }))
);
