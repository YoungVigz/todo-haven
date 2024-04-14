import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()

  const authRedirect = () => {
    navigate("/auth")
  }

  return (
    <>
    <div className="circle"></div>
    <main className="w-screen h-full text-center flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold">Todo Haven</h1>
        <p className="text-2xl">Empower Your Productivity: Your Tasks, Your Triumphs!</p>

        
        <button onClick={authRedirect} className="2xl:w-1/6 xl:w-1/5 lg:w-2/6 md:w-2/5 sm:w-2/4 w-2/3 h-12 try rounded-3xl font-bold text-xl mt-8">Try it out!</button>
    </main>
    </>
  )
}
