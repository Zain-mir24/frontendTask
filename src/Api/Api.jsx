import axios from "axios";
const BASE_URL = 'https://frontend-test-api.aircall.io'
export const UserLogin = async (username, password) => {
    try {
        let result = {}
        const login = await axios.post(`${BASE_URL}/auth/login`, {
            username,
            password
        })
        console.log(login.data.access_token, "LoginToken")
        localStorage.setItem("access", login.data.access_token)
        localStorage.setItem("refresh_token", login.data.refresh_token)

        result = {
            Message: "Success"
        }
        return result
    } catch (e) {
        console.log(e, "Error")
    }
}
// Route to get Refresh-Token
export const GetRefreshToken = async () => {
    try {
        let result = {}
        const RefreshToken = await axios.post(`${BASE_URL}/auth/refresh-token`, {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access")}`
            }
        })
        console.log(RefreshToken, "Refresh token gotten")
        localStorage.setItem("access", RefreshToken.data.access_token)
        localStorage.setItem("refresh_token", RefreshToken.data.refresh_token)
        result = {
            Message: "Success"
        }
        return result

    } catch (e) {
        console.log(localStorage.getItem("access"))
        console.log(localStorage.getItem("refresh_token"))
        console.log(e, "error")
    }
}
// Get Paginated call
export const GetPaginatedCalls = async () => {
    try {
        let result = {}
        const headers = `Authorization: Bearer ${localStorage.getItem("access")}`
        const Getcalls = await axios.get(`${BASE_URL}/calls`, {
            headers: headers
        })
        GetRefreshToken()

        result = {
            Message: "Success",
            data: Getcalls.data.nodes
        }
        return result

    } catch (e) {
        if (e.response?.data.statusCode === 401) {
            console.log(localStorage.getItem("access"), "Accesstoken")
            GetRefreshToken()
        }

    }

}

// Create a note
export const AddNote = async (id, note) => {
    let result = {}

    try {
        const addNote = await axios.post(`${BASE_URL}/calls/${id}/note`, {
            content: note
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access")}`
            }
        })
        console.log(addNote, "Adding notes")
        result = {
            Message: "Success",
            // data: Getcalls.data.nodes
        }
        return result
    } catch (e) {
        console.log(e, "error on adding notes")
        result = {
            Message: e,
        }
        return e;
    }
}
// Archiving end points

export const ArchiveCall = async (id) => {
    let result = {}
    try {

        const Archive = await axios.put(`${BASE_URL}/calls/${id}/archive`, {

        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access")}`
            }
        })

        result = {
            Message: "Success",
            data: Archive
        }
        return result
    } catch (e) {
        console.log(e, "error on Archived")
        result = {
            Message: e,
        }
        return e;


    }
}