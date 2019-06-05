const api = "http://localhost:5000/api"

const headers = {
    "Content-type": "application/json",

}

export const register = (bodyContent) =>
    fetch(`${api}/users`, { 
        method: 'POST',
        headers: {
            ...headers,
        },
        body: JSON.stringify({ bodyContent })
    }).then(res => res.json());

export const auth = (bodyContent) =>
    fetch(`${api}/auth`, { 
        method: 'POST',
        headers: {
            ...headers,
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json());
