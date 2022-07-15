import Title from '../Title/Title'
import logo from '../../Images/gdsc-logo.png'
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
        <div className="w-full rounded">
            <img src={nseclogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={ciemlogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={sitlogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={gcelogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={gecbsplogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={hitlogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={jiscelogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={dscsitlogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={msitlogo}
                alt="image"></img>
        </div>
    </div>
    </div>
  )
}

export default Partners