import React, { useState, useEffect } from 'react';
import Speakers from './Components/Speakers/Speakers';
import Loading from './Components/Loading';

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div>
            {/* <h1 className='text-3xl font-bold underline'>Cloud Community Days</h1> */}
            {loading ? <Loading /> : <Speakers />}
        </div>
    );
}

export default App;
