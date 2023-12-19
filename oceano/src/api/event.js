export const getEvent = async (id) => {
    const response = await fetch(
        'http://localhost:4444/event', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(id)
        }
    )
    const event = await response.json();
    return event;
}

export const getLastEvent = async (id) => {
    const response = await fetch(
        'http://localhost:4444/last/event', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(id)
        }
    )
    const lastEvent = await response.json();
    return lastEvent;
}

export const getFavoriteEvent = async (id) => {
    const response = await fetch(
        'http://localhost:4444/favorite/event', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(id)
        }
    )
    const favoriteEvent = await response.json();
    return favoriteEvent;
}

export const getTypeEventUser = async (id) => {
    const response = await fetch(
        'http://localhost:4444/type/event/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(id)
        }
    )
    const favoriteEvent = await response.json();
    return favoriteEvent;
}

export const getTypeEvent = async () => {
    const response = await fetch(
        'http://localhost:4444/type/event', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
        }
    )
    const typeEvent = await response.json();
    return typeEvent;
}