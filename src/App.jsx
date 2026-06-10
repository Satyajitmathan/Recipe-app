import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='py-10 px-[10%] text-white font-thin w-screen h-screen bg-gray-800 overflow-y-auto scrollbar-none'>
      <Navbar /> 
      <MainRoutes />
      
    </div>
  )
}

export default App