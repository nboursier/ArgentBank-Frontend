import './User.css'
import { useEffect, useState } from 'react'


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import useGetuser from '../Hooks/useGetuser'

import { useStore, useSelector } from 'react-redux'
import usePutuser from '../Hooks/usePutuser'


function User () {
 
const {Getuser}= useGetuser()
useEffect(()=>{Getuser()},[])

const store = useStore()
// const [userfname, setuserfname] = useState(store.getState().firstname)
// const [userlname, setuserlname] = useState(store.getState().lastname)


const userfname = useSelector(state=> state.firstname)
const userlname = useSelector(state=> state.lastname)
const useruname = useSelector(state=> state.username)


const {Putuser}= usePutuser()


const [isOpen, setIsOpen] = useState(false);

const handlesubmit = (event) => {
event.preventDefault()
const userdata = event.target.username.value
console.log(userdata)
Putuser(userdata)

setIsOpen(false)

}


  return (
    <div>
<Navbar ></Navbar>


<main>
        <div className="main ">
      <div className="header">
        

        
        
        { isOpen ?
                     <div className="edituser">

              <h1>Edit user Info</h1>
                        <form onSubmit={handlesubmit} >
            <div className="input-wrapper">
                <label for="username">User Name</label>
                <input type="text" id="username" name="username"  />
            </div>

            <div className="input-wrapper">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname" disabled defaultValue={userfname} />
            </div>

            <div className="input-wrapper">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lname" disabled defaultValue={userlname} />              
            </div>


            <div className="button-container">
              <button className="button" type="submit" value="submit" >Save</button>
              <button className="button" type="reset" value="reset" onClick={() => setIsOpen(false)} >Cancel</button>
            </div>
         </form>

               </div>
                :
                    <div>
                      <h1>Welcome back
                        <br />{userfname} {userlname} !
                        <br /> username : {useruname}
                      
                      </h1>
                       <button className="edit-button" onClick={() => setIsOpen(!isOpen)}>Edit Name</button>
                    </div>
        }
       
        

      </div>

      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      </div>
      </main> 
      <Footer></Footer>

    </div>

)
}

export default User