import { useLocation, useNavigate } from "react-router-dom";
import qs from 'qs'

const QueryHook = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const QueryParams = qs.parse(location.search, { ignoreQueryPrefix: true })

    const MergeQueryParams = (params)=>{
        navigate(`?${qs.stringify({...QueryParams , ...params})}`)
    }

    return {navigate , location , QueryParams , MergeQueryParams}
}

export default QueryHook;
