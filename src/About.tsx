import React from 'react'

const About = () => {
    return (
        <>
            <div className='text-center text-4xl py-5'>All about Cloud Community days</div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  place-items-center bg-lightBlue bg-opacity-50'>
                <div className='px-20'>
                    <h3 className='text-gray-800 text-3xl py-5'>What is CCD’22 ?</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lectus consequat, condimentum ante ut, scelerisque tortor. Proin gravida mi vel risus vehicula, quis posuere dolor scelerisque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fuga ullam alias quam vel iusto saepe quibusdam sunt harum delectus sint, fugit amet architecto obcaecati mollitia? Ea ipsa voluptate ut.</p>
                </div>
                <img src="https://www.linkpicture.com/q/about_3.png" alt="about"  />
            </div>
        </>
    )
}

export default About
