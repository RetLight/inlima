import axios from 'axios';

// URL de la API (actualiza según sea necesario)
const URI = 'https://inlima-backend.azurewebsites.net/';
// const URI = 'http://localhost:3001/';

axios.defaults.withCredentials = true; // Configuración global

const get = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.get(url, {
            withCredentials: true // Configuración específica de la solicitud
        });
    } catch(err) {
        console.error(err);
        return null;
    }
}

const post = async (endpoint, payload) => {
    try {
        const url = URI.concat(endpoint);
        console.log(url);
        return await axios.post(url, payload, {
            withCredentials: true // Configuración específica de la solicitud
        });
    } catch(err) {
        console.error(err);
        return null;
    }
}

const put = async (endpoint, payload) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.put(url, payload, {
            withCredentials: true // Configuración específica de la solicitud
        });
    } catch(err) {
        console.error(err);
        return null;
    }
}

const remove = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.delete(url, {
            withCredentials: true // Configuración específica de la solicitud
        });
    } catch(err) {
        console.error(err);
        return null;
    }
}

const base = { get, post, put, remove };

export default base;