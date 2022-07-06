import Title from '../Title/Title'
import COC from '../../Images/COC.gif'

const Coc = () => {
  return (
    <>
      <Title heading="Code Of Conduct" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-2 place-items-center px-8">
        <div className="w-full lg:w-3/4 my-0 mx-auto sm:text-left">
          <h3 className="text-3xl py-5 font-bold">AntiHarassment Policy</h3>
          <h3 className="text-regalBlue text-s font-bold">
            Why do we have an official Anti-Harassment policy for Google Developer
            Group?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              It sets expectations for behavior at the event. Simply having an
              anti-harassment policy can prevent harassment.
            </li>
            <li>
              It encourages people to attend who have had bad experiences at other
              events
            </li>
            <li>
              It gives event staff/volunteers instructions on how to handle
              harassment quickly, with minimum amount of disruption for the event.
            </li>
          </ul>
          <h3 className="text-regalBlue text-s font-bold mt-3">
            Harassment includes (but is not limited to):
          </h3>
          <ul className="list-disc ml-6">
            <li>
              Offensive verbal comments related to gender, sexual orientation,
              disability, gender identity, age, race, religion.
            </li>
            <li>The use or display of sexual images in public spaces.</li>
            <li>Deliberate intimidation.</li>
            <li>
              Deliberate intimidation Stalking Harassing photography or recording
              Sustained disruption of talks or other events Inappropriate physical
              contact Unwelcome sexual attention
            </li>
            <li>Harassing photography or recording</li>
            <li>Stalking</li>
          </ul>
        </div>
        <div className="shadow-2xl shadow-imageBlue bg-transparent my-10 ">
          <img src={COC} alt="COC" width={600} className=" rounded-xl" />
        </div>
      </div>
    </>
  )
}

export default Coc
