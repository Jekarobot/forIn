function orderByProps(obj, order) {
    const orderedProps = [];
    const restProps = [];

    for (const key of order) {
        if (key in obj) {
            orderedProps.push({ key, value: obj[key] });
        }
    }

    for (const key in obj) {
        if (!order.includes(key)) {
            restProps.push({ key, value: obj[key] });
        }
    }

    restProps.sort((a, b) => (a.key > b.key) ? 1 : -1);

    return [...orderedProps, ...restProps];
}

export default orderByProps
