"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders } from 'next-auth/react'

function Nav() {
  const { data: session } = useSession();

  const [provider, setProvider] = useState(null)
  const [toggleDropDown, setToggleDropDown] = useState(false)

  useEffect(() => {
    const setUpProvider = async () => {
      const response = await getProviders();

      setProvider(response)
    }
  
    setUpProvider();
  
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
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className='black_btn'>Create Post</Link>
            <button type='button' className='outline_btn' onClick={signOut}>Sign Out</button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
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
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              alt='profile'
              className='rounded-full'
              onClick={() => setToggleDropDown((prev) => !prev)}
              />
              {toggleDropDown && (
                <div className='dropdown'>
                  <Link
                   href="/profile"
                   className='dropdown_link'
                   onClick={() => setToggleDropDown(false)}
                  >
                  My profile
                  </Link>
                  <Link
                   href="/create"
                   className='dropdown_link'
                   onClick={() => setToggleDropDown(false)}
                  >
                  Create Prompt
                  </Link>
                  <button
                    type='button'
                    onClick={() => {
                      setToggleDropDown(false);
                      signOut;
                    }}
                    className="mt-5 w-full black_btn"
                  >Sign Out</button>
                </div>
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