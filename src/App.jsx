import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Accounts, ForgotPassword, Grounds, Home, Login, Registration, ResetPassword } from './pages'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/grounds' element={<Grounds />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
      
    
  )
}

export default App
