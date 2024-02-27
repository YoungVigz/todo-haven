
export const Login = () => {
  return (
    <>
      <label htmlFor="email" className="text-black">E-mail:</label>
      <input type="text" className="shadow"/>
      <label htmlFor="password" className="text-black">Password:</label>
      <input type="text" className="shadow"/>
      <button type="submit" className="bg-black text-white rounded">Login</button>
    </>
  )
}

