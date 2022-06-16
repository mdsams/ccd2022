import { useState } from 'react'
import Title from '../Title/Title'

const FAQ = () => {
  const [showlist, setShowlist] = useState<boolean[]>([false, false, false, false])
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 my-7 place-items-center px-8">
      <div>
        <img
          src="https://www.linkpicture.com/q/Capture-1.svg"
          width={600}
          alt="about"
        />
      </div>
      <div className="w-full ">
        <Title heading="FAQ" />
        <div className="pb-1">
          <h2>
            <div
              onClick={() => setShowlist([true, false, false, false])}
              className="cursor-pointer flex justify-between rounded-xl  items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>What is this website?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </h2>
          <div className={`${!showlist[0] ? 'hidden' : ''}`}>
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This website is a collection of links to various websites that I have
                worked on. I have also created a blog where I share my thoughts on
                various topics.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-1">
          <h2>
            <div
              onClick={() => setShowlist([false, true, false, false])}
              className="cursor-pointer flex justify-between rounded-xl items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>What is this website?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </h2>
          <div className={`${!showlist[1] ? 'hidden' : ''}`}>
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This website is a collection of links to various websites that I have
                worked on. I have also created a blog where I share my thoughts on
                various topics.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-1">
          <h2>
            <div
              onClick={() => setShowlist([false, false, true, false])}
              className="cursor-pointer flex justify-between rounded-xl items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>What is this website?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </h2>
          <div className={`${!showlist[2] ? 'hidden' : ''}`}>
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This website is a collection of links to various websites that I have
                worked on. I have also created a blog where I share my thoughts on
                various topics.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-1">
          <h2>
            <div
              onClick={() => setShowlist([false, false, false, true])}
              className="cursor-pointer flex justify-between rounded-xl items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>What is this website?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </h2>
          <div className={`${!showlist[3] ? 'hidden' : ''}`}>
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This website is a collection of links to various websites that I have
                worked on. I have also created a blog where I share my thoughts on
                various topics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
