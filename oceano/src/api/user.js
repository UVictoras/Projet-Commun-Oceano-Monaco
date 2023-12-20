export const addUser = async (user) => {
    await fetch(
        'http://localhost:4444/user/insert', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        }
    )
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}

export const getUsers = async () => {
    const response = await fetch(
        'http://localhost:4444/user/all', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }
    )
    const users = await response.json()
    return users
}

export const getUser = async (id) => {
    const response = await fetch(
        'http://localhost:4444/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(id)
        }
    )
    const user = await response.json();
    return user;
}