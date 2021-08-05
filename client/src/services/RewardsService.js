const baseURL = 'http://localhost:5000/api/rewards/'

export const getRewards = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postReward = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteReward = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}