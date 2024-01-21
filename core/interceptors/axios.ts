import axios from "axios";

const axiosInterceptorInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

// JWT Token (JSON WEB TOKEN)
// -> access token (30p 1h 1d 5d 7d 30d) -> save to cookie
// -> refresh token (1d 7d 30d 1y) -> save to cookie
axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    const accessToken = JSON.parse(localStorage.getItem("token")!);

    // If token is present add it to request's Authorization Header
    if (accessToken !== null) {
      if (config.headers) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    // Handle request errors here ->

    return Promise.reject(error);
  },
);
export default axiosInterceptorInstance;
