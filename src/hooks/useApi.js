import { useQuery } from 'react-query'
import { requestApi } from '../services/api'

export const useApi = (option, url) => useQuery(
    option,
    async () => (requestApi(url))
)
