import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import RecipeContext from './context/RecipeContext.jsx'
 

createRoot(document.getElementById('root')).render(
  <RecipeContext>
    <HashRouter>
        <App />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="dark"
        />
    </HashRouter>  
  </RecipeContext>
)
