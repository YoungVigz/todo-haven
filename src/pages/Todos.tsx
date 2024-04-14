import api from "@/utils/api"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"

interface Todo {
  _id: string,
  content: string
}

interface List {
  name: string, 
  _id: string,
  todos: Array<Todo>
}

export const Todos = () => {
  const parms = useParams()
  const location = useLocation()
  const navigation = useNavigate()
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
  const [lists, setLists] = useState<Array<List>>([])
  const [refreshData, setRefreshData] = useState(false)

  useEffect(() => {
    if(!localStorage.getItem("token")) {
      navigation("/login")
    }

    const fetchLists = async () => {
      try {
        const listsResponse = await api.get("/list", {
          headers,
          params: {
            project_id: parms.id
          }
        })

        const updatedLists = await Promise.all(listsResponse.data.map(async (list: List) => {
          const todosResponse = await api.get("/todo", {
            headers,
            params: {
              project_id: parms.id,
              list_id: list._id
            }
          })
          list.todos = todosResponse.data
          return list
        }))

        setLists(updatedLists)
      } catch (error) {
        console.error(error)
      }
    }

    fetchLists()
  }, [refreshData])

  const refreshDataHandler = () => {
    setRefreshData(!refreshData)
  }

  const createList = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await api.post("/list", {
      name: (e.currentTarget[0] as HTMLInputElement).value,
      
    }, {
      headers,
      params: {
        project_id: parms.id
      }
    })
      .catch(err => console.log(err))

    refreshDataHandler()
  }

  const createTodo = async (e: React.FormEvent<HTMLFormElement>, list_id: string) => {
    e.preventDefault()

    await api.post("/todo", {
      content: (e.currentTarget[0] as HTMLInputElement).value,
      list_id
    }, {
      headers,
      params: {
        project_id: parms.id
      }
    })
      .catch(err => console.log(err))
    refreshDataHandler()
  }
  
  const deleteTodo = async (todo_id: string) => {
    await api.delete("/todo/" + todo_id, {
      headers,
      params: {
        project_id: parms.id
      }
    })
      .catch(err => console.log(err))
    refreshDataHandler()
  }

  const deleteList = async (list_id: string) => {
    await api.delete("/list/" + list_id, {
      headers,
      params: {
        project_id: parms.id
      }
    })
      .catch(err => console.log(err))
    refreshDataHandler()
  }

  return (
    <div className="">
      <div className="text-xl font-black text-center mb-10">{location.state?.pName || "Name loader error"}</div> 
      
      <div className="flex max-h-96 overflow-x-scroll">
        {lists.map(list => (
          <div className="min-w-48 max-w-48 ml-10 primary p-5 rounded-md" key={list._id}>
            <div className="text-xl font-black mb-5 primary">{list.name} <FontAwesomeIcon className="primary" icon={faTrash} onClick={() => deleteList(list._id)}/></div>
            <ul className="primary">
              {list.todos.map(todo => (
                <li className="p-3 mb-5 bg-slate-800 rounded-md" key={todo._id}>{todo.content} <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo._id)}/></li>
              ))}

              <form onSubmit={e => createTodo(e, list._id)} method="post">
                  <input type="text" className="authInput"/>
                  <button type="submit">Add todo!</button>
              </form>
            </ul>
          </div>
        ))}

        <form onSubmit={createList} method="post" className="ml-10">
            <input type="text" className="authInput"/>
            <button type="submit">Add new list!</button>
        </form>
      </div>
    </div>
  )
}
