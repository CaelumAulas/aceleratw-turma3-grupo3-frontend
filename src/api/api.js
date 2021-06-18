const baseURL = "http://localhost:8080";

export async function fetchList(url, setData) {
    await fetch(baseURL + url, {
        method: "GET"
    })
        .then((response) => response.json())
        .then((data) => {
            setData(data.content);
        });
}

export async function fetchGetById(url, token) {
    return await fetch(baseURL + url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then((response) => response.json());
}

export async function fetchDashboard(url, setData, token) {
    return await fetch(baseURL + url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        });;
}

export async function fetchFormCreate(url, data, token) {
    await fetch(baseURL + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: data,
    })
        .then((response) => {
            if (!response.ok)
                throw new Error();
        });
}

export async function fetchAuth(data, setData) {
    await fetch(`${baseURL}/auth`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    })
        .then((response) => {
            if (response.ok)
                return response.json()
            throw new Error();
        })
        .then((data) => {
            setData(data.token);
        })
}

export async function fetchFormUpdate(url, data, token) {
    await fetch(baseURL + url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: data,
    })
        .then((response) => {
            if (!response.ok)
                throw new Error();
        });
}

export async function fetchFormDelete(url, token) {
    await fetch(baseURL + url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then((response) => {
            if (!response.ok)
                throw new Error();
        });
}