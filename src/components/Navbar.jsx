import './Navbar.css'
import { NavLink } from "react-router"
import { useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'


function Navbar() {
 
const token = useSelector ( state => state.token )
console.log(token)
  return (
    <div>
     <nav className="main-nav">
      <NavLink to ={"/"} >
      <div className="main-nav-logo" >
        <img
          className="main-nav-logo-image"
          src="./argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </div>
      </NavLink>
      <div>
        
        <NavLink to={"/Signin"}> 
        <div >
        <div className="main-nav-item">
        <ReactSVG  className="main-nav-svg" src="./usercircle.svg" />

          {token? 
          
          <div >
          Sign Out
          </div>
          : 
          
          
          
          <div >
          Sign In
          </div>
          }
          
            </div>
            </div>
        </NavLink> 
      </div>
    </nav>
    </div>
  )
}

export default Navbar
