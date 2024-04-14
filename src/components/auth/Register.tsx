import axios from "axios"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Register = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem("token")) 
      navigate("/projects")
  }, [localStorage])

  const registerRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const login = (e.currentTarget[0] as HTMLInputElement).value
    const email = (e.currentTarget[1] as HTMLInputElement).value
    const password = (e.currentTarget[2] as HTMLInputElement).value
    
    await axios.post("http://localhost:4000/user/register", {
      login,
      email,
      password
    }).then(res => {
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("login", res.data.login)
      window.location.reload()
    }).catch(err => console.log(err))
  }

  return (
    <form onSubmit={registerRequest} className="flex flex-col">
      <label htmlFor="login" className="font-black mb-2 text-xl">Login:</label>
      <input type="text" className="w-full mb-5 authInput rounded-3xl p-2"/>
      <label htmlFor="email" className="font-black mb-2 text-xl">E-mail:</label>
      <input type="text" className="w-full mb-5 authInput rounded-3xl p-2"/>
      <label htmlFor="password" className="font-black mb-2 text-xl">Password:</label>
      <input type="password" className="authInput rounded-3xl p-2"/>
      <button type="submit" className="font-black authSumbit text-xl mt-10">Login</button>
    </form>
  )
}



