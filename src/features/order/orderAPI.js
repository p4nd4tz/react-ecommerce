export function createOrder(item) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });

        const data = await response.json();
        resolve({ data });
    });
}

export function fetchAllOrders(sort, pagination) {
    let queryString = '';

    // for (let key in sort) {
    //     queryString += `${key}=${sort[key]}&`;
    // }
    for (let key in pagination) {
        queryString += `${key}=${pagination[key]}&`;
    }

    return new Promise(async (resolve) => {
        const response = await fetch(
            'http://localhost:8080/orders?' + queryString
        );
        const data = await response.json();
        resolve({ data: { orders: data, totalOrders: data.items } });
    });
}

export function updateOrder(order) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/orders' + order.id, {
            method: 'PATCH',
            body: JSON.stringify(order),
            headers: { 'content-type': 'application/json' },
        });
        const data = await response.json();
        resolve({ data });
    });
}
