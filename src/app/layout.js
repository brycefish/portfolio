"use client"
import './globals.css'
import Navbar from '../../components/Navbar';
import { useState } from 'react';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Portfolio | About',
  description: 'A Portfolio to showcase recent work by Bryce Fish, a software developer from Boise, Idaho',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='bg-gray-600'>
      <body>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
