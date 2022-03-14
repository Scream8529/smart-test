import axios from 'axios';
import { IUser } from '../utils/types'

const URL = 'http://localhost:40375/';

const API = {
    getUsers: () => {
        return axios.get(`${URL}users`);
    },
    addUser: (data: Omit<IUser, '_id'>) => {
        return axios.post(`${URL}user`, data)
    },
    removeUser: (id: string) => {
        return axios.delete(`${URL}user?id=${id}`)
    },
    updateUser: (data: Omit<IUser, '_id'>) => {
        return axios.put(`${URL}user`, data)
    }
};

export default API
