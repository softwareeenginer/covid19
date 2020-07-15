import Axios from "react-native-axios";

let API = Axios.create({
    baseURL: "http://localhost:5000/"
});

export default API;
