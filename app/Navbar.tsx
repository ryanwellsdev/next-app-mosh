'use client'
import { useSession, signOut, signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { status, data: session } = useSession()

    return (
        <div className='flex bg-slate-200 p-5 space-x-3'>
            <Link href="/" className='mr-5'>Next.js</Link>
            <Link href="/users">Users</Link>
            {status === 'loading' && <div>Loading...</div>}
            {status === 'authenticated' && (
                <div>
                    {session?.user?.name}
                    <button onClick={() => signOut()} className='ml-3'>Sign Out</button>
                </div>
            )}
            {status === 'unauthenticated' && (
                <button onClick={() => signIn()} className='ml-3'>Login</button>
            )}
        </div>
    )
}

export default Navbar
