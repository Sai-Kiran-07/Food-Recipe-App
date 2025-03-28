import './App.css'
import MainNavigation from './components/MainNavigation'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import axios from 'axios'

const getAllRecipes = async ()=>{
  let allRecipes = []
  await axios.get('http://localhost:5000/recipe').then(res =>{
    allRecipes = res.data
  })
  return allRecipes
}

const router = createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>,loader:getAllRecipes}
  ]}
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
