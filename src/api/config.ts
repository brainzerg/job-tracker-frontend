import axios from "axios"

const idTokenHeader = "X-Id-Token"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
})

let accessToken: string = ""
let idToken: string = ""

api.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    if (idToken) {
      config.headers[idTokenHeader] = idToken
    }

    return config
  },
  (error) => Promise.reject(error)
)

export const setAccessToken = (token: string) => {
  accessToken = token
}

export const setIdToken = (token: string) => {
  idToken = token
}
