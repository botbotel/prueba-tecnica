import axios from 'axios';


const _axios = axios.create({
    baseURL: 'http://localhost:51235/api',
    headers: {
        'Authorization' : `Bearer ${localStorage.getItem('userToken')}`,
    },
});



export const getProveedores = async () => {
    try {
        const response = await _axios.post('/siglasauth/proveedores', null);
        return response.data;
    } catch (error) {
        throw new Error("Error al cargar los proveedores");
    }
};