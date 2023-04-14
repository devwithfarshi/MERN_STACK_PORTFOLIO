import axios from "axios";
const myAx = axios.create({
  // baseURL: "http://localhost:5000",
  // baseURL: "http://192.168.0.104:5000",
  baseURL: "https://salmanportfolioserver.onrender.com/",
});

export default myAx;
