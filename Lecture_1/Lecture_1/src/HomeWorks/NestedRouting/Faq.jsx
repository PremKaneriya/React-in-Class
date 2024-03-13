import React from 'react';
import { useParams } from 'react-router-dom';

const Faq = () => {
    const { name } = useParams();

    return (
        <>
        <h1 className="text-3xl mt-60 px-5 py-5 text-slate-500">Faq</h1>

        <div className='mt-20'>
            <h1 className="text-3xl mt-5 px-5 py-5 text-slate-500">Use Params Name : {name}</h1>
        </div>
        </>
    );
};

export default Faq;
