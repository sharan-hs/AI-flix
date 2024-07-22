import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[60%] px-6 lg:pt-[20%] lg:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='-m-6 ml-2 lg:ml-0 lg:m-0 text-lg lg:text-6xl font-bold'>{title}</h1>
        <p className='hidden lg:inline-block py-6 w-1/4 text-lg'>{overview}</p>
        <div className='flex gap-4'>
            <div className='relative mt-8 ml-2 lg:mt-0 lg:ml-0 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000"  className="w-6 h-6 bi bi-play-fill hidden lg:inline-block absolute top-5 left-6 " viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg> 
            
            <button className='bg-white text-black py-1 px-5 mt-0 text-sm lg:p-4 lg:px-16 lg:text-lg rounded-lg hover:bg-opacity-80'>Play Now</button>
            </div>

            <div className='relative hidden lg:inline-block'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-info-circle absolute top-5 left-6" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
            <button className='bg-gray-500 text-white p-4 px-16 text-lg rounded-lg'>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle