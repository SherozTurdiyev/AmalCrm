import { useMutation } from "react-query"
import { requestApi } from "../services/api"

export const useMutationApi = (url, method) => {
    return (
        useMutation(
            (variable) => {
                return requestApi({
                    method,
                    url,
                    data: variable
                })
            })
    )
}