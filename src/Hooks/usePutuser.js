import {  useDispatch, useSelector } from "react-redux"
import { setusername } from "../store/slice/authslice"




const usePutuser = () => {
   
    const dispatch = useDispatch()
    const token = useSelector(state=> state.token)
    const Putuser = async (username) => {
        console.log("ok")
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "put",
            headers: { "Authorization":"Bearer "+ token ,
                "Content-Type": "application/json"
             },
            body: JSON.stringify({
                "userName": username,
                
            })
        })
        console.log(response)
        if (response.ok) {
            const bodydata = await response.json()
             dispatch( setusername (username ) )
            
            console.log(bodydata)

        }
        
    }
    return {
            Putuser
        }
}
export default usePutuser