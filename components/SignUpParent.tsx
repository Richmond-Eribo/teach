import Link from 'next/link'
import React, {useState} from 'react'
type Props = {}

const SignUpParent = (props: Props) => {
  const [activeInput, setActiveInput] = useState(0)
  return (
    <form>
      <div
        className={` border-b-2   py-2 w-[330px] lg:w-[420px] mt-10 ${
          activeInput === 2 ? 'border-blue-500  ' : 'border-[#BFC7D3]'
        } `}
        onClick={() => setActiveInput(2)}
      >
        <input
          type='text'
          className=' w-full border-0 outline-none bg-none'
          placeholder='Full Name'
        />
      </div>

      <div
        className={` border-b-2   py-2 w-[330px] lg:w-[420px] mt-10 ${
          activeInput === 2 ? 'border-blue-500  ' : 'border-[#BFC7D3]'
        } `}
        onClick={() => setActiveInput(2)}
      >
        <input
          type='email'
          className='w-full   border-0 outline-none bg-none'
          placeholder='Email'
        />
      </div>

      <div
        className={` border-b-2   py-2 w-[330px] lg:w-[420px] mt-10 ${
          activeInput === 2 ? 'border-blue-500  ' : 'border-[#BFC7D3]'
        } `}
        onClick={() => setActiveInput(2)}
      >
        <input
          type='password'
          className=' w-full border-0 outline-none bg-none'
          placeholder='Password'
        />
      </div>
      <button className='button sign-button mt-10'>sign up</button>

      <p className='mt-5 text-center'>
        Already have an account?{' '}
        <Link href='/SignIn'>
          <a className='text-[#42B9D1] '>Login</a>
        </Link>{' '}
      </p>
    </form>
  )
}

export default SignUpParent
