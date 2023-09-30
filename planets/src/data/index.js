const  axios  = require('axios');
const baseUrl = "http://database:8004/Planet";

module.exports = {
    // function que retorna los films
    list: async () => {
        //console.log("IN Dataaaaaa Planet file");
        const films = await axios.get(baseUrl);
        return films.data;
    },

    getById: async (id) => {
        const getId = await axios.get(`${baseUrl}/${id}`);
        return getId.data;
    },

    create: async (film) => {
        const newRecord = await axios.post(baseUrl, film);
        return newRecord.data;
    },

    delete: async (id) => {
        const del = await axios.delete(`${baseUrl}/${id}`);
        return del.data;
    },
    
    update: async (id, updateData) => {
        const updt = await axios.put(`${baseUrl}/${id}`, updateData);
        return updt.data;
    }
}