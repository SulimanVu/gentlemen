import axios from "axios";

// import { getJWTFromLocalStorage } from "@/shared/hooks";

axios.defaults.baseURL = "https://gentlemen-back.onrender.com";

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
