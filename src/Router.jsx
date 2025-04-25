import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Home from './pages/home'
import Signin from './pages/Signin'
import User from './pages/user'
import { useSelector } from 'react-redux'

function Router() {

    const token = useSelector(state=> state.token)


    return(
    <BrowserRouter>
    <Routes>
      
      <Route index element={<Home />} />
      <Route path="/Signin" element={<Signin />} />

      
      <Route path="/User" element={token? <User />: <Navigate to="/Signin" />} />
      
    </Routes>
  </BrowserRouter>
)
}
export default Router