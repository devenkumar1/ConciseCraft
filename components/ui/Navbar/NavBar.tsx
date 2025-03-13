import React from 'react'
import Link from 'next/link';
import { ScrollText } from 'lucide-react';
function NavBar() {
  return (
    <div className='w-full pt-2 h-10 flex justify-between items-center sticky z-50'>
        <nav className='flex justify-between w-[90%] mx-auto px-2'>
            <div>
                <Link href={"/"} className='flex gap-2'><ScrollText className='text-white'/>ConciseCraft </Link>
            </div>
            <div><Link href="#">pricing</Link></div>
            <div><Link href="#">SignIn</Link></div>
        </nav>
    </div>
    
  )
}

export default NavBar