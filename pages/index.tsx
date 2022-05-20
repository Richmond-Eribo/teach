import type {NextPage} from 'next'
import Image from 'next/image'
import LandingPageSlide from '../components/LandingPageSlide'
import Nav from '../components/Nav'
import ProfileSlider from '../components/ProfileSlider'
import TextWrapper from '../components/TextWrapper'

const Home: NextPage = () => {
  return (
    <div className='bg-[#42B9D1]/5'>
      <section className='h-screen bg-[#D1644D]/5 lg:px-20 lg:pt-10'>
        <Nav />
        <LandingPageSlide />
      </section>

      <section className='lg:px-36 lg:py-20'>
        <h2 className='font-bold lg:text-5xl text-center  text-text-dark mb-20'>
          About Us
        </h2>

        <div className='flex justify-around'>
          <div className=''>
            <Image
              src='/classroom.png'
              height={602 / 1.4}
              width={640 / 1.4}
              alt='classroom'
              className='rounded-lg'
            />
            <Image
              src='/learning.png'
              height={602 / 1.4}
              width={640 / 1.4}
              alt='classroom'
              className='rounded-lg'
            />
          </div>
          <TextWrapper width={700}>
            <p className='lg:mb-5'>
              Academic tutors is a business established to provide students at
              all levels of the National Curriculum to receive the appropriate
              help they need to achieve the grades they deserve. We have fully
              vetted qualified and unqualified (university graduates) teachers
              to provide students the extra support in their subjects of
              interest at affordable price to parents or guardians.
            </p>

            <p className='lg:mb-5'>
              We ensure that students taking tuition from our teachers are
              safeguarded. This is why we invest in Bramble Education, where
              lessons are automatically recorded for all parties to be able to
              access. We also offer tuition session for cluster groups of three
              students where each session lasts for an hour.
            </p>

            <p className='lg:mb-5'>
              In some cases, our tutors do offer face to face tuition, depending
              on the need of some parents as well as the willingness of the
              tutor. Parents will have the possibility to select the tutor of
              their choice, from a variety in our list. We ensure our tutors
              follow the UK schools’ curriculum or international Baccalaureate.
            </p>

            <p className='lg:mb-5'>
              We also ensure that tutors registered with us have both practical
              and industrial experience as well as sound knowledge of the
              subject registered for.
            </p>

            <p className='lg:mb-5'>
              Academic tutors are independent educators committed to the
              actualization of students’ goals.{' '}
              <strong>
                Trust us, we do everything possible to ensure your child is
                getting the best of tuition from our tutors.
              </strong>
            </p>

            <p className='lg:mb-5'>
              If you are unable to find the tutor of your choice on our website,
              contact us and inform us of the subject (s) you are interested in,
              we would link you with the appropriate tutor (s).
            </p>

            <p className='lg:mb-5'>
              We also provide 11 plus examination lessons to progress your child
              into a Grammar School or Private School. Get in touch and we are
              here to help.
            </p>

            <p className='lg:mb-5'>
              <strong>
                The tutoring fee starts from as little as £16 per hour.
              </strong>
              The trial lessons are half the price of the original tutor
              charges.
            </p>
          </TextWrapper>
        </div>
      </section>

      <section className='lg:px-36 lg:py-20'>
        <h2 className='font-bold lg:text-5xl text-center  text-text-dark mb-20'>
          Services
        </h2>

        <div className='flex justify-around'>
          <div>
            <Image
              src='/classroom.png'
              height={602 / 1.4}
              width={640 / 1.4}
              alt='classroom'
              className='rounded-lg'
            />
          </div>

          <TextWrapper width={500}>
            <p className='lg:mb-5'>
              Learning online has put many pupils on course since the start of
              the pandemic. This has helped learners to close the gaps in
              learning and widen their knowledge with the help of expertise from
              our dedicated and experienced tutors. The continuation of this
              practice is imperative for achieving the desired grades. We are
              here to help, tell us your child’s needs and relax, we would take
              it on from there to support your child at every step the way
              towards the attainment of better grades
            </p>
            <p className='lg:mb-5'>
              Maths, English, and Science are compulsory subjects taught all
              over the world at all key stages. Our teachers provide their
              expertise in many subject areas such as:
            </p>
            <p className='lg:mb-5'>
              Primary English | Secondary English | Primary Maths | Secondary
              Maths | Combined Science | Physics | Chemistry | Biology | French
              | Spanish | Geography | German | History | Yoruba | Hausa | Igbo |
              Urdu Others
            </p>
          </TextWrapper>
        </div>
      </section>

      <section className='lg:px-36 lg:py-20'>
        <h2 className='font-bold lg:text-5xl text-center  text-text-dark mb-20'>
          Our Team
        </h2>

        <div className='flex flex-row justify-around'>
          {[
            {name: 'Dr. O. Akinyemi', role: 'Manager, Recruitment'},
            {name: 'Mrs R. Wilson', role: 'Finance'},
            {name: 'Mr. T. Taiwo', role: 'Senior Administrator'},
          ].map(profile => (
            <figure
              key={profile.name}
              className='lg:w-[295px] lg:h-[295px] bg-white rounded-xl shadow-lg flex flex-col justify-center items-center '
            >
              <Image
                height={159}
                width={159}
                src='/Profile1.png'
                alt='Profile Image'
                className='rounded-full'
              />
              <h3 className='font-bold lg:mt-4'>{profile.name}</h3>
              <figcaption>{profile.role} </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className=' lg:px-36 lg:py-20 bg-SignUpRectangle bg-contain bg-no-repeat lg:h-[408px] lg:w-full flex flex-col justify-center '>
        <div>
          <h3 className='uppercase text-white font-semibold'>we are hiring</h3>
          <p className='lg:text-4xl w-[723px] text-white my-3 '>
            We are currently looking for qualified and unqualified tutors to
            deliver 1:1 online tutoring in Maths, English and Science.
          </p>
          <button className='bg-[#42B9D1] button p-2 px-5 tracking-wide text-white rounded-md '>
            SignUp
          </button>
        </div>
      </section>

      <section className=' lg:py-20'>
        <h2 className='font-bold lg:text-5xl text-center  text-text-dark mb-20'>
          Some or our experienced teachers
        </h2>
        <ProfileSlider />
        {/* hy */}
      </section>
    </div>
  )
}

export default Home
