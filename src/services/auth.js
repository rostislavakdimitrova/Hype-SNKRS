import { get, post } from './helpers/requester';

const baseUrl = 'http://localhost:4000/auth/';


export const register = (username, email, password) => post(`${baseUrl}/signup`, {
    username,
    email,
    password
});

export const login = (email, password) => post(`${baseUrl}/signin`, {
    email,
    password
});

export const logout = async (token) => get(`${baseUrl}/logout`, token);