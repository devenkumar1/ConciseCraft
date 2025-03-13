import React from 'react'
import Link from 'next/link'

function HeroHeader() {
  return (
    <div className=' w-full '>
        <nav>
            <div>
                <Link href={"/"}></Link>
            </div>
        </nav>
    </div>
  )
}

export default HeroHeader