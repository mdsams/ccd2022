import Title from '../Title/Title'
import logo from '../../Images/gdsc-logo.png'
import nseclogo from '../../Images/gdsc-nsec-logo.png'

const Partners = () => {
  return (
    <div className="w-3/4 my-0 mx-auto">
      <Title heading="Community Partners" />
      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
        <div className="w-full rounded">
            <img src={nseclogo}
                alt="image"></img>
            {/* <h2>NSEC</h2> */}
        </div>
        <div className="w-full rounded">
            <img src={nseclogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={nseclogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={nseclogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={nseclogo}
                alt="image"></img>
        </div>
        <div className="w-full rounded">
            <img src={nseclogo}
                alt="image"></img>
        </div>
    </div>
    </div>
  )
}

export default Partners
