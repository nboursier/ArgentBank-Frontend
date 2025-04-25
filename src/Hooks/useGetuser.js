import { useDispatch, useSelector } from "react-redux"
import { setuser } from "../store/slice/authslice"



const useGetuser = () => {
   
    const dispatch = useDispatch()
    const token = useSelector(state=> state.token)
    const Getuser = async () => {
        console.log("ok")
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "get",
            headers: { "Authorization":"Bearer "+ token  },
            
        })
        console.log(response)
        if (response.ok) {
            const bodydata = await response.json()
            
            dispatch( setuser (bodydata.body ) )
            console.log(bodydata)

        }
        
    }
    return {
            Getuser
        }
}
export default useGetuser