import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'

import RootLayout from './components/RootLayout'
import HelpLayout from './components/HelpLayout'

import './index.css'
import Home from './components/Home'
import About from './components/About'
import InvalidHelpLink from './components/InvalidHelpLink'
import Personel, { personelLoader } from './components/Personel'
import PersonelDetail, { personelDetailLoader } from './components/PersonelDetail'
import FallbackPage from './components/FallbackPage'
import Faq from './components/Faq'
import Contact, { contactAction } from './components/Contact'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<FallbackPage />}>     {/* the errorElement will catch all bubling error */}
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='personel' element={<Personel />} loader={personelLoader} />    {/* route loader */}
      <Route
        path='personel/:id'
        element={<PersonelDetail />}
        loader={personelDetailLoader}
      />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction}/>      {/* the action will be triggered when the data is submitted */}
        <Route path='*' element={<InvalidHelpLink />} />
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
