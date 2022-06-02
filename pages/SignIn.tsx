import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import Avatar from '../components/Svg/Avatar'
import PasswordIcon from '../components/Svg/PasswordIcon'

type Props = {}

const SignIn = (props: Props) => {
  const [activeInput, setActiveInput] = useState(0)
  return (
    <div className='grid grid-cols-2  h-screen'>
      <div className='lg:w-[728px]  relative'>
        <Image src='/SignUpImage2.png' layout='fill' alt='sign up Image' />
      </div>

      <form
        className='flex flex-col justify-center items-center  h-screen'
        // onClick={() => setActiveInput(0)}
      >
        <Link href='/'>
          <a>
            <Image
              src='/logo.png'
              height={42}
              width={305}
              alt='logo'
              className=''
              priority
            />
          </a>
        </Link>

        {/* Your Name Input section */}
        <div
          className={`flex border-b-2  py-2 w-full lg:max-w-[420px] mt-28 ${
            activeInput === 1 ? 'border-blue-500' : 'border-[#BFC7D3]'
          } `}
          onClick={() => setActiveInput(1)}
        >
          <Avatar fill={activeInput === 1 ? '#3b82f6' : '#BFC7D3'} />
          <input
            type='text'
            className='ml-3 w-full border-0 outline-none'
            placeholder='Enter your Username'
            onClick={() => setActiveInput(1)}
          />
        </div>
        {/* Your Password Section */}
        <div
          className={`flex border-b-2  py-2 w-full lg:max-w-[420px] mt-10 ${
            activeInput === 2 ? 'border-blue-500  ' : 'border-[#BFC7D3]'
          } `}
          onClick={() => setActiveInput(2)}
        >
          <PasswordIcon fill={activeInput === 2 ? '#3b82f6' : '#BFC7D3'} />
          <input
            type='text'
            className='ml-3 w-full border-0 outline-none'
            placeholder='Enter your Password'
          />
        </div>
        <div className='flex lg:max-w-[420px] w-full justify-between mt-10 text-[#BFC7D3]'>
          <p>
            <input type='checkbox' name='remember' /> Remember me
          </p>

          <Link href='/'> Forgot Password?</Link>
        </div>
        <button className='button sign-button '>sign in</button>
        <p className='mt-5'>
          New on our platform?{' '}
          <Link href='/'>
            <a className='text-[#42B9D1] '>Create an account</a>
          </Link>{' '}
        </p>
      </form>
    </div>
  )
}

export default SignIn
