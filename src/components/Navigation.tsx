import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { Link } from "react-router-dom"

const Navigation = () => {

    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    const logoutPc = () => {
        localStorage.removeItem("token")
        window.location.reload();
    }

    const logoutMobile = () => {
        localStorage.removeItem("token")
        toggleMenu()
    }

    return (
        <header className="w-screen flex justify-around items-center">
            <div className="w-1/2 font-black text-3xl">TH</div>      
            
            <div className="md:block hidden">
            { localStorage.getItem("token") ? 
                <>
                    <Link to="projects" className="mr-5">Projects!</Link>
                    <Link to="login" onClick={() => logoutPc()}>Logout!</Link> 
                </>
                : 
                <Link to="login">Register/Login!</Link>   
            }
                
            </div>

            <div className={mobileMenu ? "w-screen h-screen absolute top-0 left-0 flex justify-around items-center" : "hidden"}>
                { localStorage.getItem("token") ? 
                    <div className="flex flex-col justify-center items-center">
                        <div className="mb-5">
                            Account! (WIP)
                        </div>  

                        <div className="mb-5">
                            <Link to="projects" onClick={() => toggleMenu()}>Projects!</Link>
                        </div>

                        <div className="">
                            <Link to="login" onClick={() => logoutMobile()}>Logout!</Link>
                        </div>
                    </div>
                : 
                    <Link to="login" onClick={() => toggleMenu()}>Register/Login!</Link>
                }

            </div>
            <FontAwesomeIcon className="text-3xl z-20 md:hidden" icon={faBars} onClick={() => toggleMenu()}/>
        </header>
    )
}

export default Navigation