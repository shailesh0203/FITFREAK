"use client"
import React from 'react'
import logo from '@/assets/logo.png'
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import Authpopup from '../Authpopup/Authpopup'
const Navbar = () => {
  const [isloggedin,setIsloggedin]=React.useState<boolean>(false)
  const[showpopup,setShowpopup]=React.useState<boolean>(false);
  return (
    <nav>
        <Image src={logo} alt="Logo"/>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/profile'><IoIosBody/></Link>
        {
        isloggedin?
      <button>Logout</button>:
      <button
      onClick={()=>setShowpopup(true)}
      >Login</button>
      }
      {
        showpopup && <Authpopup/>
      }
    </nav>
  )
}

export default Navbar