import type {NextPage} from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import LandingPageSlide from '../components/LandingPageSlide'
import Nav from '../components/Nav'
import ProfileSlider from '../components/ProfileSlider'
import TextWrapper from '../components/TextWrapper'

const Home: NextPage = () => {
  return (
    <div className=''>
      <section className='h-screen bg-[#D1644D]/5 lg:px-10 lg:pt-10'>
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
              src='/services.png'
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

        <div className='flex flex-row justify-around '>
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

      <section className='lg:px-36 lg:py-20 relative h-[440px] '>
        <Image
          layout='fill'
          src='/uni.png'
          alt='Profile Image'
          // className='rounded-full'
        />
      </section>

      <section className='lg:px-36 lg:py-20'>
        <h2 className='font-bold lg:text-5xl text-center  text-text-dark mb-20'>
          University Admission Assist
        </h2>

        <div className='flex text-text-light justify-around'>
          <TextWrapper width={400}>
            <p className='mb-5'>
              We are UK based outstanding teachers providing 1st class tuition
              to students all over the world to help them build their future.
            </p>

            <h4 className='font-bold'>Target segments</h4>
            <ol className='mb-5'>
              <li>We started locally with UK and diaspora children.</li>
              <li>
                We have now expanded internationally to children of both high
                and low income parents abroad who want to invest on their
                children&apos;s education
              </li>
            </ol>

            <h4 className='font-bold'>Other areas</h4>
            <p>
              We help students in developing countries gain admission to
              universities in the following countries:
            </p>
          </TextWrapper>

          <TextWrapper width={300}>
            <h4 className='font-bold'>Tuition free countries</h4>
            <ol className='list-disc mb-5 list-inside'>
              <li>Germany</li>
              <li>Denmark</li>
              <li>Austria</li>
              <li>Norway</li>
              <li>Sweden</li>
              <li>and many more</li>
            </ol>

            <h4 className='font-bold'>Tuition free countries</h4>
            <ol className='list-disc list-inside'>
              <li>UK</li>
              <li>United States of America</li>
              <li>Canada</li>
              <li>Australia</li>
            </ol>
          </TextWrapper>
        </div>
      </section>

      <section className='text-center flex flex-col items-center lg:px-36 lg:py-20'>
        <h2 className='font-bold lg:text-5xl   text-text-dark mb-10'>
          Get In Touch
        </h2>
        <h2 className='font-bold lg:text-2xl'>Opening Hours</h2>
        <h2 className='font-bold lg:text-2xl mb-10'>07:30 AM - 05:00 PM</h2>

        <div className='flex flex-col justify-between h-[200px]'>
          <div>
            <h4 className='font-bold'>Email</h4>
            <p>admin@academictutors.org.uk</p>
          </div>
          <div>
            <h4 className='font-bold'>Phone</h4>
            <p>+44 173 377 0106</p>
          </div>
          <div>
            <h4 className='font-bold'>Address</h4>
            <p>
              Academic Tutors Limited Whittlesey, Peterborough PE7, United
              Kingdom
            </p>
          </div>
        </div>

        <form className='grid grid-cols-2 gap-2 my-5 lg:w-[700px] lg:h-[200px]'>
          <input
            type='text'
            placeholder='Name'
            className='border border-[#C4C4C4] rounded-md p-1 px-5 focus:border-blue-500 outline-blue-400'
          />
          <input
            type='email'
            placeholder='Email'
            className='border border-[#C4C4C4] rounded-md p-1 px-5 outline-blue-400'
          />
          <textarea
            name='message'
            placeholder='Message'
            id=''
            cols={10}
            rows={20}
            className='border border-[#C4C4C4] rounded-md p-1 px-5 col-span-2 outline-blue-400'
          />
          <button
            onClick={e => {
              e.preventDefault()
            }}
            className='bg-[#42B9D1] button  p-2 px-5 tracking-wide text-white rounded-md ml-16 mr-2 col-start-2'
          >
            SEND REQUEST
          </button>
        </form>
      </section>

      <section className='lg:px-36 lg:py-20 relative h-[440px] '>
        <Image
          layout='fill'
          src='/map.png'
          alt='Profile Image'
          // className='rounded-full'
        />
      </section>

      <Footer />
    </div>
  )
}

export default Home
