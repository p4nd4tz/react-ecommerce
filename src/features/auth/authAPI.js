export function createUser(user) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        const data = await response.json();
        resolve({ data });
    });
}

export function checkUser(user) {
    return new Promise(async (resolve, reject) => {
        const email = user.email;
        const password = user.password;

        const response = await fetch('http://localhost:8080/users?email=' + email);
        const data = await response.json();

        if (data.length) {
            if (password === data[0].password) {
                resolve({ data: data[0] })
            } else {
                reject({ message: "Invalid email or password" })
            }
        } else {
            reject({ message: "Invalid email or password" })
        }
    });
}


export function logout(userId) {
    return new Promise(async (resolve, reject) => {
        resolve({ data: 'success' })
    });
}