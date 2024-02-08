import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

import { Outlet } from 'react-router-dom';
export default function RootLayout({children}) {
  return (
    <div className='relative pt-32'>
        <Navbar />
        <main className='min-h-96'>
            <Outlet/>
        </main>
        <Footer/>
        </div>
  )
}
