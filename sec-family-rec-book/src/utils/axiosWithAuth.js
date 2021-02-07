




  
import axios from 'axios';

export function getToken() {
  return localStorage.getItem('token');
}

export default function() {
  return axios.create({
    baseURL: 'https://back-end-build-weeks.herokuapp.com/',
    headers: {
      Authorization: getToken(),
    },
  });
}












// import axios from "axios";

// export const axiosWithAuth = () => {
//   const token = window.localStorage.getItem("token");
//   return axios.create({
//     headers: {
//       authorization: token
//     },
//     baseURL: "http://localhost:5000"
//   });
// };
