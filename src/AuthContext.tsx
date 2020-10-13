import {createAuthProvider} from 'react-token-auth';
import {navigate} from "@reach/router";

console.log("env", process.env);
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/';

export const [useAuth, authFetch, login, logout] =
    createAuthProvider<{ accessToken: string, refreshToken: string }>({
        accessTokenKey: 'access_token'
    });

export const akoFetch = async (input: RequestInfo, init?: RequestInit): Promise<any> => {
    const response = await authFetch(input, init);
    const data = await response.json();
    if (!response.ok) {
        if (response.status === 401 || response.status === 422) {
            navigate('/auth/login').then(r => {
                window.location.reload();
            })
        }
        return Promise.reject(data.err || 'HTTP error');
    }
    return data;
};
