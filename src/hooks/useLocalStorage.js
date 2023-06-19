
const uselocalstorage = ()=>{
    const  getStorage = (item)=>{
        localStorage.getItem(item)
    }

    return {getStorage}
}

export default uselocalstorage ;