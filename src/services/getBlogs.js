import axios from "axios"
import config from '@/config'
const headers = { 'Content-Type': 'application/json' }

export const getBlogsByCategory = async (category) => {
    const res = await axios.get(`${config.apiBaseUrl}/blogs/categories/${category}`, headers)
    return res.data
}

export const getBlogsByTag = async (tag) => {
    const res = await axios.get(`${config.apiBaseUrl}/blogs/tags/${tag}`, headers)
    return res.data
}

export const getBlogsBySearch = async (keyword) => {
    const res = await axios.get(`${config.apiBaseUrl}/blogs/search/all?keyWord=${keyword}`, headers)
    return res.data
}

export const getBlogById = async (id) => {
    const res = await axios.get(`${config.apiBaseUrl}/blogs/${id}`, headers)
    return res.data
}