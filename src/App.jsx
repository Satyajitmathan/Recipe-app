import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen px-[8%] py-8 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-y-auto'>
      <Navbar /> 
      <MainRoutes />
      
    </div>
  )
}

export default App