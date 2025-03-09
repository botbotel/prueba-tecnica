import axios from 'axios';

export const getData = async (token: string) => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:51235/api/siglasauth',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const response = await axiosInstance.post('/articulosext', null);
    return response.data;
};
