import axios from "axios";
import { useNavigate } from "react-router";




export const requestApi = axios.create({
    baseURL: "http://shamuratov.pythonanywhere.com/api/v1",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`    }
})

requestApi.interceptors.response.use(
    (res) => {
        return res
    },
    (error) => {
        switch (error.response.status) {
            case 401:
                console.log("UnAuthorization");
                localStorage.removeItem('access')
                break;
            case 403 :
                 console.log( window.location.pathname = "/");
            default:
                break;
        }
    }
)