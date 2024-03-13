import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

export const fetchProducts = async() => {
    try{
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch(error){
        throw error;
    }
};