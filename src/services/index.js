import axios from 'axios';

//vezan uz konkretan backend
let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
})

//objekti vezani uz pojedine rute
let Posts = {
    getAll(searchTerm) {
        return Service.get(`/posts?title=${searchTerm}`) //service.get zove instancu axiosa nad mojim url
    }
}

export { Service }