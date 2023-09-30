const  axios  = require('axios');
const characters = require('./characters.json');
const baseUrl = "http://database:8004/Character";

module.exports = {
    // function que retorna los characters
    list: async () => {
        const characters = await axios.get(baseUrl);
        return characters.data;
    },

    getById: async (id) => {
        const getId = await axios.get(`${baseUrl}/${id}`);
        return getId.data;
    },

    create: async (character) => {
        const newRecord = await axios.post(baseUrl, character);
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