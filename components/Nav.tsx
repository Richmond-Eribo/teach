import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className='flex justify-between items-center lg:pb-10 lg:px-10'>
      <Image src='/logo.png' height={42} width={305} alt='logo' />

      <div>
        {['About us', 'Services', 'Teachers'].map(Navlink => (
          <Link href='' key={Navlink}>
            <a className='ml-6 text-15px'>{Navlink} </a>
          </Link>
        ))}

        <button className='bg-[#42B9D1] w-[142px] h-[50px] button text-15px p-2 px-5 tracking-wide text-white rounded-md ml-16 mr-6'>
          SignUp
        </button>
        <Link href='/SignIn'>
          <button className='bg-[#42B9D1]/20 w-[142px] h-[50px] text-15px text-[#42B9D1] border-2 border-[#42B9D1] button p-2 px-5 tracking-wide  rounded-md'>
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Nav
