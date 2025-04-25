import { useDispatch } from "react-redux"
import { settoken } from "../store/slice/authslice"
import { useNavigate } from "react-router"

const useSignin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const signin = async (username, password) => {
        console.log("ok")
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": username,
                "password": password
            })
        })
        console.log(response)
        if (response.ok) {
            const bodydata = await response.json()
            
            dispatch( settoken (bodydata.body.token ) )
            navigate ( "/User")

        }
        
    }
    return {
            signin
        }
}
export default useSignin