import React from 'react'
import Image from 'next/image'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

// import './styles.css'

// import required modules
import {Pagination} from 'swiper'

type Props = {}

function LandingPageSlide({}: Props) {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className='lg:h-[82vh]'>
        <SwiperSlide>
          <div className='flex justify-center items-center lg:px-2'>
            <h1 className='font-bold lg:text-6xl lg:w-[600px]  text-text-dark hies '>
              The excellent place <br /> to find Academic solutions
            </h1>
            <Image
              className='self-end'
              src='/slides/teacher2 1.png'
              height={742 / 1.3}
              width={699 / 1.4}
              // src='/slides/teacher 1.png'
              // height={811 / 1.4}
              // width={733 / 1.4}
              alt={'teacher 1'}
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx>
        {`
          .hies {
            line-height: 75px;
          }
        `}
      </style>
    </div>
  )
}

export default LandingPageSlide
