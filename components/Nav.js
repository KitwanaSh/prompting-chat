"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders } from 'next-auth/react'

function Nav() {
  const isUserLoggedIn = true;

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          alt="promptopia logo"
          className='object-contain'
        />
        <p className='logo_text'>Promtopia</p>
      </Link>

      {/* Desktop Navbar */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className='black_btn'>Create Post</Link>
            <button type='button' className='outline_btn' onClick={signOut}>Sign Out</button>
          </div>
        ) : (
          <>
          
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav