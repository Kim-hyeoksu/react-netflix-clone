import axios from "axios"

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "4fffcf0e79698b98b21f0c9f064e39ed",
    language: "ko-KR"
  }
})

export default instance