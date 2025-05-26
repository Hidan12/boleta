import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StandarLayouts } from './layouts/StandarLayouts'
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
import { Pay } from './pages/pay/Pay'

const router = createBrowserRouter([
  {
    element: <StandarLayouts/>,
    children: [
      {path: "/", element: <Home />},
      {path: "/detail/:title", element: <Detail/>},
      {path:"/pay", element: <Pay/>}
    ]
  }
])

function App() {


  return (
    <>
      <RouterProvider router={router}/>      
    </>
  )
}

export default App
