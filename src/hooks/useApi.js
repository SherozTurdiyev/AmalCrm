import {useQuery} from 'react-query'
import { requestApi } from '../services/api'

export const useApi = (url)=>useQuery(
        "requestApi",
        async ()=>(requestApi(url))
    )
