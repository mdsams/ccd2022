import Countdown from './Countdown'
import logo from '../../Images/logo.png'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, signInWithGoogle } from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Hero = () => {
  const [isShow, setIsShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) navigate('/dashboard')
  }, [user, loading])

  const toggle = () => {
    setIsShow(!isShow)
  }

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
          <p className="text-xl py-4 text-lightGrey">Dates yet to be Announced</p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <button
              className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white uppercase font-semibold py-4 px-8 rounded"
              onClick={toggle}
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
        {/* Login Box */}
        <div
          className={`${isShow === false ? 'hidden' : ''} relative z-10`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 hover:cursor-pointer hover:text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={toggle}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start justify-center">
                    <button
                      className="flex transition ease-in-out delay-150 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 py-4 px-8 rounded"
                      onClick={signInWithGoogle}
                    >
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-0.5 mr-2 h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                            <path
                              fill="#4285F4"
                              d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                            />
                            <path
                              fill="#34A853"
                              d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                            />
                            <path
                              fill="#EA4335"
                              d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                            />
                          </g>
                        </svg>
                      </p>
                      <p className="text-black uppercase font-semibold">
                        Sign In with Google
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          {/* <img
          className=""
          src="https://www.linkpicture.com/q/Untitled-design-3-1_1.png"
          alt="hero"
        /> */}
          <div className="">
            <p className="text-center text-4xl font-semibold text-lightGrey">
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
