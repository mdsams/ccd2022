interface IProps {
    heading: string;
}

const Title = ({ heading }: IProps) => {
    return (
        <div className='flex justify-center items-center flex-col p-5 text-blackOlive'>
            <div className='text-3xl text-blackOlive '>{heading}</div>
            <hr className='w-60 border-b-2 border-gray-400 text-center'></hr>
        </div>
    );
};

export default Title;
