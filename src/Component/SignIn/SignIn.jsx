import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { adduser } from "../../ReduxSetUp/userSlice"


const SignIn = () => {
    const dispatch=useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const nav=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email,password);
        axios.post('/user/signin',{
            email,password
        }).then((res)=>{
            if(res.status===200){
                const user=
                dispatch(adduser(res.data.user))
                nav('/')
            }
        }).catch(e=>console.log(e.message))
    }
    return (
        <div className="signin">
            <h3 style={{ color: "white" }}>Login Here</h3>
            <input type="email" className="lginp" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className="lginp" placeholder='Enter Password' onChange={(e)=>setPass(e.target.value)}/>

            <button className="lgbutton" onClick={handleSubmit}>Login</button>

        </div>
    )
}
export default SignIn