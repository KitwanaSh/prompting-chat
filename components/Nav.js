"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders } from 'next-auth/react'

function Nav() {
  const isUserLoggedIn = true;
  const [provider, setProvider] = useState(null)
  const [toggleDropDown, setToggleDropDown] = useState(false)

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();

      setProvider(response)
    }
  
    setProvider();
  
  }, [])
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
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                alt='profile'
                className='rounded-full'
              />
            </Link>
          </div>
        ) : (
          <>
            {provider && Object.values(provider).map((provide) => (
              <button
                type="button"
                key={provide.name}
                onClick={() => signIn(provide.id)}
                className='black_btn'
              >Sign In</button>
            ))}
          </>
        )}
      </div>

      {/* Mobile navigation */}
      <div className='sm:hidden flex relative'>
        {isUserLoggedIn ? (
          <div className='flex'>
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              alt='profile'
              className='rounded-full'
              onClick={() => setToggleDropDown((prev) => !prev)}
              />
              {toggleDropDown && (
                <div></div>
              )}
          </div>
        ) : (
          <>
            {provider && Object.values(provider).map((provide) => (
              <button
                type="button"
                key={provide.name}
                onClick={() => signIn(provide.id)}
                className='black_btn'
              >Sign In</button>
            ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav