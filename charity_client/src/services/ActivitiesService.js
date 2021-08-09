const baseURL = 'http://localhost:5000/api/activities/'

export const getActivities = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postActivity = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteActivity = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}