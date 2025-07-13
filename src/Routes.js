import React ,  {lazy , Suspense}from 'react'
import {Routes , Route} from 'react-router-dom'

import Footer from './composant/Footer'
import NavBar from './composant/NavBar'

//import App from './App'
// import Jsx from './composant/Jsx'
// import Stage from './composant/Stage'
// import Modal from './composant/Modal'
const App = lazy(() => import("./App"));
const Jsx = lazy(() => import("./composant/Jsx"));
const Stage = lazy(() => import("./composant/Stage"));
const Modal = lazy(() => import("./composant/Modal"));


export default function RoutesComponent() {
  return (
    <div>
        <NavBar/>
      <Routes>
        <Route path='/App' element={<App/>}/>
        <Route path='/Modal' element={<Modal/>}/>
        <Route path='/Stage' element={<Stage/>}/>
        <Route path='/Jsx' element={<Jsx/>}/>
        <Route path='/*' element={<App/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
