const urlApi= import.meta.env.VITE_API_URL;
import axios from 'axios';

export const getAllGame = async () => {
    try{
        const response = await axios.get(urlApi);
        return response.data;
    }catch(error){
        console.log("Error in getAllGame",error)
    }
}

export const getGameById = async (id)=>{
    try {
        const response = await axios.get(`${urlApi}/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

