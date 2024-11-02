import React from 'react'
import Spinner from './Spinner';
import { useGif } from '../hooks/useGif';


export const Random = () => {
    const {gif, loading, fetchData} = useGif();

    return (
        <div className="w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] min-h-[300px]">
            <h1 className="text-2xl underline uppercase font-bold mt-[15px]">A Random Gif</h1>
            <br />
    
                {

                    loading ? <Spinner /> : <img src={gif} width='450' className='h-[250px] max-h-[200px]' alt='gif'/>

                }
          


            <button onClick={() => fetchData()}
                className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>
        </div>
    )
}
