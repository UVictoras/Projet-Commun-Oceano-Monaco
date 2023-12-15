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