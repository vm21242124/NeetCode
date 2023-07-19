import React, { useState } from 'react'
import './LoginPage.css'
import SignIn from '../../Component/SignIn/SignIn'
import SignUp from '../../Component/SignUp/SignUp'
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
                    {cmp ? <SignIn /> : <SignUp/>}
                    <span onClick={() => setCmp(!cmp)}>{cmp ? "Don't have an Account ? Register Now" : "Already Have an account ? Login Now"}</span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage