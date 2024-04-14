import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Auth } from "./pages/Auth"
import { Projects } from "./pages/Projects"
import { Todos } from "./pages/Todos"
import Navigation from "./components/Navigation"

import "./styles/index.scss"
import "./styles/index.css"


function App() {
  return (
    <div className="h-screen">
      <Navigation />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/todos/:id" element={<Todos />} />
        </Routes>
      </div>

       <footer className="font-black flex justify-center items-center text-base w-screen text-center">Gabriel Gałęza &copy; 2024</footer>
    </div>
  )
}

export default App
