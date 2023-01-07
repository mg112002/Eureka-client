import axios from "axios"
import config from '@/config'
import store from "@/store"
const headers = { 'Content-Type': 'application/json' }

export const UserRegistration = async (userDetails) => {
    const res = await axios.post(`${config.apiBaseUrl}/auth/register`, userDetails, headers)
    return res.data
}

export const NewsLetterSignUp = async (details) => {
    const res = await axios.post(`${config.apiBaseUrl}/newsletter`, details, headers)
    return res.data
}

export const VoteBlog = async (blogId, action, userId) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': store.state.auth.token
    }
    const res = await axios.patch(`${config.apiBaseUrl}/blogs/vote/${blogId}?action=${action}&userId=${userId}`, headers)
    return res.data
}

export const DeleteBlog = async (id) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': store.state.auth.token
    }
    const res = await axios.delete(`${config.apiBaseUrl}/blogs/${id}`, headers)
    return res.data
}

export const UpdateBlog = async (id, details) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': store.state.auth.token
    }
    const res = await axios.patch(`${config.apiBaseUrl}/blogs/${id}`, details, headers)
    return res.data
}

export const AddBlog = async (blogInfo) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': store.state.auth.token
    }
    const { data } = await axios.post(`${config.apiBaseUrl}/blogs`, blogInfo, { headers })
    return data
}