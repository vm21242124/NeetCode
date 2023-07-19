import React, { useState } from 'react'
import './LoginPage.css'
const LoginPage = () => {
    const [cmp, setCmp] = useState(false)
    return (
        <div className="LoginPage">
            <div className="logincomponent">
                <div className="leftcmp">
                    <h1>NeetCode</h1>
                    <p>Let's begin your journey towards dream</p>
                </div>
                <div className="rightcmp">
                    {cmp ? <SignIn /> : <SignUp />}
                    <span onClick={() => setCmp(!cmp)}>{cmp ? "Don't have an Account ? Register Now" : "Already Have an account ? Login Now"}</span>
                </div>
            </div>
        </div>
    )
}
const SignIn = () => {

    return (
        <div className="signin">
            <h3 style={{ color: "white" }}>Login Here</h3>
            <input type="email" className="lginp" placeholder='Enter Email' />
            <input type="password" className="lginp" placeholder='Enter Password' />

            <button className="lgbutton">Login</button>

        </div>
    )
}
const SignUp = () => {

    return (
        <div className="signin">
            <h3 style={{ color: "white" }}>Register Here</h3>
            <input type="text" className="lginp" placeholder='Enter Name' />
            <input type="email" className="lginp" placeholder='Enter Email' />
            <input type="password" className="lginp" placeholder='Enter Password' />

            <button className="lgbutton">Sign Up</button>

        </div>
    )
}

export default LoginPage