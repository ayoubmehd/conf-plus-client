import axios from "axios";

export const http = axios.create({
    baseURL: process.env.BACKEND_URL || "http://localhost:8000"
})

