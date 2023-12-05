export const addUser = async (user) => {
    await fetch(
        'http://localhost:4444/user', {
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