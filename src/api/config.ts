import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
})

let accessToken: string = ""

api.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

export const setAccessToken = (token: string) => {
  accessToken = token
}
