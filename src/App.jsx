import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './Pages/Home'


function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Home />}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
