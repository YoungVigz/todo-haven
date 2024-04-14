import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faPenToSquare, faPlay, faTrash } from '@fortawesome/free-solid-svg-icons'

import api from "@/utils/api"

interface Project {
  name: string,
  _id: string,
  isEditing: boolean
}

export const Projects = () => {
  const navigation = useNavigate()
  const [ps, setPs] = useState<Array<Project>>([])
  const [refreshData, setRefreshData] = useState(false)
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }

  useEffect(() => {
    if(!localStorage.getItem("token")) {
      navigation("/auth")
    }

    api.get("/project", {
      headers
    })
      .then(res => {
        setPs(res.data)
      })
      .catch(err => console.log(err))
  }, [refreshData])

  const refreshDataHandler = () => {
    setRefreshData(!refreshData)
  }

  const createProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await api.post("/project", {
      name: (e.currentTarget[0] as HTMLInputElement).value 
    }, {
      headers
    }).catch(err => console.log(err))

    refreshDataHandler()
  }

  const deleteProject = async (project_id: string) => {
    await api.delete("/project/" + project_id, {
      headers
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    refreshDataHandler()
  }

  const toggleEdit = (project_id: string) => {
    setPs(ps.map(p => p._id === project_id ? {...p, isEditing: !p.isEditing} : p))
  }

  const editProjectName = async (project_id: string) => {
    const project = ps.filter(p => p._id === project_id)
    const value = (document.getElementById(project[0]._id) as HTMLInputElement).value

    if(value !== project[0].name)
      await axios.put("http://localhost:4000/project/" + project[0]._id, {
        name: value
      }, {
        headers
      }).catch(err => console.log(err))

    toggleEdit(project_id)
    refreshDataHandler()
  }

  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
       <div className="font-black text-xl mb-5">Hello, {localStorage.getItem("login")}!</div>
      <div className="w-4/5 sm:w-96 h-5/6 overflow-y-scroll">
       
        {ps.map(p => (
          <div className="w-full flex justify-between mb-4 projectItem" key={p._id}>
            
            { p.isEditing ? <input type="text" defaultValue={p.name} id={p._id}/> : <div className="mb-1">{p.name}</div> }
            
            { p.isEditing ? 
            <div className="w-24 flex justify-center">
              <div className="rounded-full w-7 h-7 primary flex justify-center items-center cursor-pointer">
                  <FontAwesomeIcon icon={faPenToSquare} className="primary" onClick={() => editProjectName(p._id)}/>
              </div>
            </div>
            : 
            <div className="w-24 flex justify-between">
              <div className="rounded-full w-7 h-7 primary flex justify-center items-center">
                <Link to={"/todos/" + p._id} className="primary no-underline" state={{pName: p.name}}>
                  <FontAwesomeIcon className="primary" icon={faPlay}/>
                </Link>
              </div>
              
              <div className="rounded-full w-7 h-7 primary flex justify-center items-center cursor-pointer">
                <FontAwesomeIcon icon={faPen} className="primary" onClick={() => toggleEdit(p._id)}/>
              </div>

              <div className="rounded-full w-7 h-7 primary flex justify-center items-center cursor-pointer">
                <FontAwesomeIcon icon={faTrash} className="primary" onClick={() => deleteProject(p._id)} />
              </div>        
            </div>}
          
          </div>
        ))}
      </div>

      <form onSubmit={createProject} method="post">
          <input type="text" className="authInput rounded-xl "/>
          <button type="submit" className="authInput bg-slate-400 rounded-xl">Add new</button>
      </form>
    </div>
  )
}
