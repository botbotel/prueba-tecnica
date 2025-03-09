import axios from "axios";

const _axios = axios.create({
    baseURL: 'http://localhost:51235/api',
    headers: {
        'Content-Type': 'application/json'
    },
});


export async function userLogin(login: string, pass: string) {
    const params = {
        login: login,
        pass: pass 
    };

    return await _axios.post('/auth/login', null, { params })
        .then((response) => {
            return response.data.userToken

        })
        .catch((error) => {
            console.error("Error during login:", error)
            throw error
        });
}


