import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className='flex  lg:flex-row justify-between items-center pb-4 px-2  md:pb-8 md:px-5 lg:pb-10 lg:px-10'>
      {/* logo */}

      <figure className='pt-1 '>
        <Image src='/logo.png' height={42 / 1.2} width={305 / 1.2} alt='logo' />
      </figure>

      {/* logo end */}
      <div className='lg:hidden  rounded shadow-md p-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          role='img'
          width='2em'
          height='2em'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 15 15'
        >
          <g transform='translate(15 0) scale(-1 1)'>
            <path
              fill='currentColor'
              fillRule='evenodd'
              d='M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z'
              clipRule='evenodd'
            />
          </g>
        </svg>
      </div>

      <div className=' hidden flex-col lg:block'>
        {['About us', 'Services', 'Teachers'].map(Navlink => (
          <Link href='' key={Navlink}>
            <a className='lg:ml-6 md:ml-3 text-15px'>{Navlink} </a>
          </Link>
        ))}

        <button className='bg-[#42B9D1] md:w-[120px] md:h-[35px]  button text-15px md:px-4 lg:px-5 tracking-wide text-white rounded-md md:ml-10 md:mr-4 lg:ml-16 lg:mr-6'>
          SignUp
        </button>
        <Link href='/SignIn'>
          <button className='bg-[#42B9D1]/20 md:w-[120px] md:h-[35px]  text-15px text-[#42B9D1] border-2 border-[#42B9D1] button  md:px-4 lg:px-5 tracking-wide  rounded-md'>
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Nav
