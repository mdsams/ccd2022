import Title from "../Title/Title"
import sponsorsData from "../Sponsors/sponsorsData.json";

const Sponsors = () => {
    const imageBorderStyle = {
        backgroundImage: `url("https://www.linkpicture.com/q/favicon-1.svg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: '0.8rem'
    }

    return (
        <>
            <Title heading="Sponsors" />
            <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-flow-row place-items-center p-5">
                {sponsorsData.map((speaker, id) => (
                <div
                    key={id}
                    className="flex md:w-3/5 sm:w-100 flex-col rounded-2xl items-center mb-4"
                >
                    <div style={imageBorderStyle}>
                    <img
                        src={speaker.image}
                        alt="profile"
                        className="rounded-full m-3 w-48 h-48 "
                    />
                    </div>
                    <h3 className="text-xl font-bold">{speaker.name}</h3>
                </div>
                ))}
            </div>
        </>
    )
}

export default Sponsors