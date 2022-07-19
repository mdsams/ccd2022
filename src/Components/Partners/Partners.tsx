import Title from '../Title/Title'
// import logo from '../../Images/gdsc-logo.png'
import nseclogo from '../../Images/gdsc-nsec-logo.png'
import ciemlogo from '../../Images/gdsc-ciem-logo.png'
import dscsitlogo from '../../Images/gdsc-dscsit-logo.png'
import gcelogo from '../../Images/gdsc-gce-logo.png'
import gecbsplogo from '../../Images/gdsc-gecbsp-logo.png'
import hitlogo from '../../Images/gdsc-hit-logo.png'
import jiscelogo from '../../Images/gdsc-jisce-logo.png'
import sitlogo from '../../Images/gdsc-sit-logo.png'
import msitlogo from '../../Images/gdsc-msit-logo.png'

const Partners = () => {
  return (
    <div className="w-2/3 my-0 mx-auto">
      <Title heading="Community Partners" />
      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
        <div
          className="w-full rounded cursor-pointer"
          onClick={() => window.open('https://dscnsec.com/', '_blank')}
        >
          <img src={nseclogo} alt="logo" />
        </div>
        <div
          className="w-full rounded cursor-pointer"
          onClick={() => window.open('https://dscciem.github.io/', '_blank')}
        >
          <img src={ciemlogo} alt="logo" />
        </div>
        <div
          className="w-full rounded cursor-pointer"
          onClick={() => window.open('https://gdscsit2021.github.io/', '_blank')}
        >
          <img src={sitlogo} alt="logo" />
        </div>
        <div
          className="w-full rounded cursor-pointer"
          onClick={() => window.open('https://twitter.com/DSC_GCE', '_blank')}
        >
          <img src={gcelogo} alt="logo"/>
        </div>
        <div
          className="w-full rounded cursor-pointer"
          onClick={() =>
            window.open(
              'https://gdsc.community.dev/events/details/developer-student-clubs-government-engineering-college-bilaspur-presents-intro-to-kaggle-gdsc-gecsp/',
              '_blank'
            )
          }
        >
          <img src={gecbsplogo} alt="logo"/>
        </div>
        <div
          className="w-full rounded cursor-pointer"
          onClick={() => window.open('https://dschit.com/', '_blank')}
        >
          <img src={hitlogo} alt="logo" />
        </div>
        <div
          className="w-full rounded cursor-pointer"
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/gdsc-jisce/?trk=public_profile_browsemap&originalSubdomain=in',
              '_blank'
            )
          }
        >
          <img src={jiscelogo} alt="logo"/>
        </div>
        <div
          className="w-full rounded cursor-pointer"
          onClick={() =>
            window.open(
              'https://gdsc.community.dev/dr-sudhir-chandra-sur-institute-of-technology-sports-complex-kolkata/',
              '_blank'
            )
          }
        >
          <img src={dscsitlogo} alt="logo"/>
        </div>
        <div
          className="w-full rounded cursor-pointer"
          onClick={() => window.open('https://dscmsit.github.io/', '_blank')}
        >
          <img src={msitlogo} alt="logo"/>
        </div>
      </div>
    </div>
  )
}

export default Partners