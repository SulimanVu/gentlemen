import axios from "axios";

// import { getJWTFromLocalStorage } from "@/shared/hooks";

axios.defaults.baseURL = "http://localhost:3010";

// axios.interceptors.request.use(
//   (config) => {
//     const auth = getJWTFromLocalStorage();

//     if (auth) {
//       config.headers.Authorization = `Bearer ${auth.token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
