const baseURL = 'http://localhost:5000/api/charities/'

export const getCharities = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postCharity = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteCharity = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}