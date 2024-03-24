export const setUserSession = async (user) => {
    await fetch(
        'http://localhost:4444/setUserSession', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        }
    )
}


export const getUserSession = async () => {
    const response = await fetch(
        'http://localhost:4444/getUserSession', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }
    )
    const user = await response.json();
    return user;
}

export const setIDEventSession = async (idEvent) => {
    await fetch(
        'http://localhost:4444/setIDEventSession', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(idEvent)
        }
    )
}


export const getIDEventSession = async () => {
    const response = await fetch(
        'http://localhost:4444/getIDEventSession', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }
    )
    const idEvent = await response.json();
    return idEvent;
}