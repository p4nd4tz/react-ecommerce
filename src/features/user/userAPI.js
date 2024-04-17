export function fetchUserOrders(userId) {
    return new Promise(async (resolve, reject) => {
        const response = await fetch('http://localhost:8080/orders?user.id=' + userId);
        const data = await response.json();
        resolve({ data: data });
    });
}