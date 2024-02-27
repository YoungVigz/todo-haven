import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Auth } from "./pages/Auth"
import { Projects } from "./pages/Projects"
import { Todos } from "./pages/Todos"

import "./styles/index.scss"
import "./styles/index.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/todos" element={<Todos />} />
       </Routes>
    </>
  )
}

export default App
