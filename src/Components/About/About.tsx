const About = () => {
  return (
    <div className="mt-8">
      <div className="grid sm:grid-cols-1 md:grid-cols-2  place-items-center bg-lightBlue bg-opacity-50">
        <div className="w-full lg:w-3/4 my-0 mx-auto pl-8 md:pl-20">
          <h3 className="text-gray-800 text-3xl py-5">Hello, CCD’22</h3>
          <p className="text-gray-600 text-xl">
            GDG Cloud Kolkata is bringing to you the largest Google Cloud developer
            event in Eastern India. Cloud Community Days Kolkata is the flagship
            event of GDG Cloud Kolkata, held annually, recollecting the best of the
            year and setting the stone for the upcoming year. Join us as we bring the
            best of speakers and help you to put your career on a Runway to Google
            Cloud.
          </p>
        </div>
        <img src="https://www.linkpicture.com/q/about_3.png" alt="about" />
      </div>
    </div>
  )
}

export default About
