import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constants'

import VideoBackground from './VideoBackground'

const MovieCard = ({movieInfo,posterPath}) => {

  const [showModal,setShowModal] = useState(false)
 

  if(!posterPath) return null

  return (
    <>
    <div onClick={()=>{
      console.log(movieInfo)
      setShowModal(!showModal)
    }} className='w-56 lg:w-48'>
        <img src={IMG_CDN_URL + posterPath} alt='Movie card' />
    </div>
        <div>
          {showModal && 
            <>
            <div className="flex fixed my-4 inset-0 z-50 overflow-x-hidden overflow-y-auto">
              <div className="relative w-[90%] my-6 mx-auto">
                {/*content*/}
                <div className="border-0 rounded-lg text-black relative w-full bg-white">
                  {/*header*/}
                  <div className="flex p-5 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      {movieInfo?.title || movieInfo?.original_name || movieInfo?.original_title}
                    </h3>
                    <button
                      className="p-1 cursor-pointer ml-auto border-0 text-black float-right text-2xl"
                      onClick={() => setShowModal(false)}>
                        X
                    </button>
                  </div>
                  {/*body*/}
                  <div className="p-6">
                    <div>
                      <VideoBackground movieId = {movieInfo.id} />
                    </div>
                    <p className='text-2xl my-4 font-semibold'>Overview:</p>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      {movieInfo?.overview}
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
          </>
          }
        </div>
    </>
  )
}

export default MovieCard

