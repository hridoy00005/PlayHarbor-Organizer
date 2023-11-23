import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Accounts, Grounds, Home } from './pages'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/grounds' element={<Grounds />} />
          <Route path='/accounts' element={<Accounts />} />
        </Routes>
      </BrowserRouter>
      
    
  )
}

export default App
