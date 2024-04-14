import { useState } from "react"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"

export const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)

    const toggleLogin = () => {
        setIsLogin(!isLogin)
    }

    return (
        <div className="h-full flex flex-col justify-center items-center">
             <div className="w-3/4 sm:w-96">
                { isLogin ? <Login/> : <Register/> }
            </div>
            <div className="mt-5">
                { isLogin ? "Don’t have account? Register" : "Already a member? Login"}
                <span className="cursor-pointer" onClick={toggleLogin}> here!</span>
            </div>
        </div>
    )
}
