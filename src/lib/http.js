import axios from 'axios'

const postClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL || 'https://jsonplaceholder.typicode.com/'
})

export {
    postClient
}