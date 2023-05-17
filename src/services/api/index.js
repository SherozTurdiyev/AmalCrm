import axios from "axios";


export const requestApi = axios.create({
    baseURL: "http://shamuratov.pythonanywhere.com/api/v1",
    headers: {
        'Content-Type': 'application/json',
        common: {
            // Authorization:"Bareer " + localStorage.getItem()
        }
    }
})