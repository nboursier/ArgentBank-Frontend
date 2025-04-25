import './Signin.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useSignin from '../Hooks/useSignin'
import { ReactSVG } from 'react-svg'


function Signin() {

  const { signin } = useSignin()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.username.value)
    console.log(e.target.password.value)
    signin(e.target.username.value, e.target.password.value)
    
  }

  return (
    <div>

      <Navbar ></Navbar>

      <main className="main bg-dark" >
        <div >
          <div className="sign-in-content">
          <ReactSVG  className="main-nav-svg" src="./usercircle.svg" />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="input-wrapper">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me"> Remember me </label>
              </div>



              <button className="sign-in-button" type="submit">Sign In</button>

            </form>
          </div>
        </div>
      </main>

      <Footer></Footer>


    </div>
  )
}

export default Signin
