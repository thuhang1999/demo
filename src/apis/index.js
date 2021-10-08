import axios from 'axios';

class ApiC {
    // singleton pattern
    static instance = null;

    constructor() {
        if (!ApiC.instance) {
            ApiC.instance = this;
        }
        return ApiC.instance;
    }

    login = async (username, password) => {
        return axios.get('/api/user/login', {
            params: {
                username,
                password
            }
        })
    }

    signUp = async (username, password, email, name) => {
        return axios.get('/api/user/sign_up', {
            params: {
                username,
                password,
                email,
                name
            }
        })
    }
}

const Api = new ApiC();
export default Api;