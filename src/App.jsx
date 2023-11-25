import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Account, ForgotPassword, Grounds, Home, Login, Registration, ResetPassword } from './pages'
import MainRouter from './routes/MainRouter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <MainRouter />
      // <BrowserRouter>
      //   <Routes>
      //     <Route path='/' element={<Home />} />
      //     <Route path='/grounds' element={<Grounds />} />
      //     <Route path='/account' element={<Account />} />
      //     <Route path='/login' element={<Login />} />
      //     <Route path='/registration' element={<Registration />} />
      //     <Route path='/forgot-password' element={<ForgotPassword />} />
      //     <Route path='/reset-password' element={<ResetPassword />} />
      //   </Routes>
      // </BrowserRouter>
      
    
  )
}

export default App
