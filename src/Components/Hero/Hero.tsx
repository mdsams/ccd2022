// import Countdown from './Countdown'
import Countdown from '../../Components/Countdown/Countdown'
import logo from '../../Images/logo.png'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, signInWithGoogle } from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Hero = () => {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) navigate('/dashboard')
  }, [user, loading])

  return (
    <>
      <div className="w-3/4 h-screen items-center flex flex-col lg:flex-row my-0 mx-auto gap-12 pt-20 lg:pt-0">
        <div className="w-full lg:w-1/2">
          <p className="text-5xl font-semibold text-blue-500">
            Cloud Community Days 2022
          </p>
          <p className="text-xl py-4">
            A community organized cloud conference with industry experts presenting
            on exciting topics!
          </p>
          <p className="text-xl py-4">Organized By</p>
          <img className="w-2/4" src={logo} alt="Logo" />
          <p className="text-xl py-4 text-lightGrey">
            Dates: 27-28<sup className="mr-0.5">th</sup>August
          </p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <button
              className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white uppercase font-semibold py-4 px-8 rounded"
              onClick={signInWithGoogle}
            >
              Reserve Your Seat
            </button>
            <a
              className="transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-600 duration-300 text-center rounded"
              href="https://sessionize.com/cloud-community-days"
              target={'_blank'}
              rel="noreferrer"
            >
              <button className="text-white uppercase font-semibold py-4 px-8 rounded">
                Become a Speaker
              </button>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          {/* <img
          className=""
          src="https://www.linkpicture.com/q/Untitled-design-3-1_1.png"
          alt="hero"
        /> */}
          <div className="">
            <p className="text-center text-4xl font-semibold text-lightGrey my-4">
              Happening In
            </p>
            <Countdown />
          </div>
        </div>
        <div className="fixed bottom-4 left-1/2">
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-violet-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
