import { useState } from 'react'
import Title from '../Title/Title'

const FAQ = () => {
  const [question1, setQuestion1] = useState<boolean>(false)
  const [question2, setQuestion2] = useState<boolean>(false)
  const [question3, setQuestion3] = useState<boolean>(false)
  const [question4, setQuestion4] = useState<boolean>(false)
  const [question5, setQuestion5] = useState<boolean>(false)
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
            <div
              onClick={() => setQuestion1(!question1)}
              className="cursor-pointer flex justify-between rounded-xl  items-center p-3 w-full font-medium text-left text-gray-500 border border-gray-300 focus:ring-4 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>What is CCD 2022 Kolkata?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          <div className={`${!question1 ? 'hidden' : ''}`}>
            <div className="p-3 border border-b-0 border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
                CCD 2022 Kolkata is short form of Cloud Community Days 2022 Kolkata
                which is among the largest free Cloud developer conferences in
                Eastern India.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-1">
            <div
              onClick={() => setQuestion2(!question2)}
              className="cursor-pointer flex justify-between rounded-xl items-center p-3 w-full font-medium text-left text-gray-500 border border-gray-300 focus:ring-4 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>Where can I find updates related to CCD 2022 Kolkata?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          <div className={`${!question2 ? 'hidden' : ''}`}>
            <div className="p-3 border border-b-0 border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
                All announcements related to the event are posted to the GDG Cloud
                Kolkata chapter mailing list which you can join by Joining the
                chapter at -{' '}
                <a href="https://gdg.community.dev/gdg-cloud-kolkata/">
                  GDG Cloud Kolkata Chapter Page
                </a>
                . You can receive the updates by following us on{' '}
                <a href="https://twitter.com/gdgcloudkol">Twitter (@gdgcloudkol)</a>,{' '}
                <a href="https://facebook.com/gdgcloudkol">
                  Facebook (@gdgcloudkol)
                </a>
                ,{' '}
                <a href="https://instagram.com/gdgcloudkol">
                  Instagram (@gdgcloudkol)
                </a>{' '}
                or{' '}
                <a href="https://www.linkedin.com/company/gdgcloudkol/">
                  LinkedIn (@gdgcloudkol)
                </a>
                . You can also join our{' '}
                <a href="https://t.me/gdgcloudkol">Telegram group</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-1">
            <div
              onClick={() => setQuestion5(!question5)}
              className="cursor-pointer flex justify-between rounded-xl items-center p-3 w-full font-medium text-left text-gray-500 border border-gray-300 focus:ring-4 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>How can I attend CCD 2022 Kolkata? How much does it cost?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          <div className={`${!question5 ? 'hidden' : ''}`}>
            <div className="p-3 border border-b-0 border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
                CCD 2022 Kolkata is a Free event. There are no costs for the ticket
                to this event. However, you must apply to be a participant to the
                event and only upon a positive review of your application you shall
                be allowed to claim a ticket. You can apply to be a participant by
                clicking the "Reserve Your Seat" button on this website's home page.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-1">
            <div
              onClick={() => setQuestion3(!question3)}
              className="cursor-pointer flex justify-between rounded-xl items-center p-3 w-full font-medium text-left text-gray-500 border border-gray-300 focus:ring-4 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>
                I want to present a talk/workshop at the conference. What should I
                do?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          <div className={`${!question3 ? 'hidden' : ''}`}>
            <div className="p-3 border border-b-0 border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
                You can submit your talk/workshop proposal on our{' '}
                <a href="https://sessionize.com/cloud-community-days">CFP Page</a>.
                The deadline for submitting CFP for this year’s conference is 12th
                August, however, the earlier you submit, more the chances of us
                reviewing your submission in depth.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-1">
            <div
              onClick={() => setQuestion4(!question4)}
              className="cursor-pointer flex justify-between rounded-xl items-center p-3 w-full font-medium text-left text-gray-500 border border-gray-300 focus:ring-4 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>
                Will I be provided travel/stay accommodation to attend the event?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          <div className={`${!question4 ? 'hidden' : ''}`}>
            <div className="p-3 border border-b-0 border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
                No. There is no provision for covering attendee travel/stay. For
                speakers, we will decide on case-by-case basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
