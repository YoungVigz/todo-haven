import { useState } from "react"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"

export const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)

    const toggleLogin = () => {
        setIsLogin(!isLogin)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 h-96 bg-white flex flex-col justify-around items-center rounded">
                <div className="h-1/6 text-black text-2xl font-bold">Todo Haven</div>
                <form className="flex flex-col h-3/6 w-64 text-black">
                { isLogin ? <Login/> : <Register/> }
                </form>

                <div className="text-black">
                    { isLogin ? "Don’t have account? Register" : "Already a member? Login"}
                    <span className="text-black cursor-pointer" onClick={toggleLogin}> here!</span>
                </div>
                
            </div>
        </div>
    )
}
