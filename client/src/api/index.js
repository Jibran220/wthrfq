import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5005" });
const API = axios.create({ baseURL: "http://localhost:5005" });

API.interceptors.request.use((req) => {
  if (
    localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY) ||
    localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  ) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
        .token
    }`;
  }

  return req;
});
export const host = "http://localhost:5005";
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;

export const fetchProducts = () => API.get("/products");
export const createProducts = (newPost) => API.post("/products", newPost);
export const createexcell = (newPost) => API.post("/products", newPost);
export const likePost = (id) => API.patch(`/products/${id}/likePost`);
export const updateProductss = (id, updatedPost) =>
  API.patch(`/products/${id}`, updatedPost);
export const deleteProducts = (id) => API.delete(`/products/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
//vendor user
export const signInv = (formDatav) => API.post("/userv/signinv", formDatav);
export const signUpv = (formDatav) => API.post("/userv/signupv", formDatav);

export const fetchcomplaince = () => API.get("/complaince");
export const createcomplaince = (newPost) => API.post("/complaince", newPost);

export const fetchrfqmanager = () => API.get("/rfqmanagers");
export const createrfqmanager = (newRFQ) => API.post("/rfqmanagers", newRFQ);
export const updateRFQ = (id, updatedPost) =>
  API.patch(`/rfqmanagers/${id}`, updatedPost);
export const deleteRFQ = (id) => API.delete(`/rfqmanagers/${id}`);

export const fetchrfquser = () => API.get("/userRFQ");
export const createrfquser = (newRFQ) => API.post("/userRFQ", newRFQ);
export const updateRFQuser = (id, updatedPost) =>
  API.patch(`/userRFQ/${id}`, updatedPost);
export const userProfile = (id, updatedPost) =>
  API.patch(`/userRFQ/${id}`, updatedPost);
export const deleteRFQuser = (id) => API.delete(`/userRFQ/${id}`);
