import Countdown from './Countdown'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const Hero = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main)
  }
  // const particlesLoaded = (container: any) => {
  //   console.log(container)
  // }
  return (
    <>
      <Particles
        id="tsparticles"
        className="absolute -z-50 h-screen w-full"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: '#FFF'
            }
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push'
              },
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: ['#4285F4', '#34A853', '#FBBC05', '#EA4335']
            },
            links: {
              color: 'random',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce'
              },
              random: false,
              speed: 4,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: 'circle'
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          fullScreen: { enable: false },
          detectRetina: true
        }}
      />
      <div className="w-3/4 h-screen items-center flex flex-col lg:flex-row my-0 mx-auto gap-12 pt-20 lg:pt-0">
        <div className="w-full lg:w-1/2">
          <p className="text-5xl font-semibold text-lightGrey">
            Cloud Community Days 2022
          </p>
          <p className="text-xl py-4">
            A community organized cloud conference with industry experts presenting
            on exciting topics!
          </p>
          <p className="text-xl py-4">Organized By</p>
          <img className="w-2/4" src="assets/images/logo.png" alt="Logo" />
          <p className="text-xl py-4 text-lightGrey">Dates yet to be Announced</p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white uppercase font-semibold py-4 px-8 rounded ">
              Reserve Your Seat
            </button>
            <button className="transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-600 duration-300 text-white uppercase font-semibold py-4 px-8 rounded">
              Become a Speaker
            </button>
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
