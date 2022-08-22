import axios from "axios"


export const fetchData = async(url,  method) => {
    const options = {
        url,
        method
    }
    try{
        const {data} = await axios(options)
        return data
    }catch(err){
        throw err
    }
}