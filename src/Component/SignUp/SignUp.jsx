import axios from "axios"
import { useState } from "react"

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
  
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/user/register', { name, email, password }).then((res) => {
            if (res.status === 200) {
                alert("Registration Successfull")
            }
           
        }).catch(e => console.log(e.message))

    }
    return (
        <div className="signin">
            <h3 style={{ color: "white" }}>Register Here</h3>
            <input type="text" className="lginp" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} required={true} />
            <input type="email" className="lginp" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required={true} />
            <input type="password" className="lginp" placeholder='Enter Password' onChange={(e) => setPass(e.target.value)} required={true} />
        
            <button onClick={handleSubmit} className="lgbutton">Sign Up</button>

        </div>
    )
}
export default SignUp