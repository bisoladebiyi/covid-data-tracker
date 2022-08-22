import React from 'react'

const LoadingState = () => {
  return (
    <div className='h-screen grid place-items-center'>
        <div className='w-14 h-14 rounded-full bg-green-200 grid place-items-center animate-pulse'>
            <div className='w-12 h-12 rounded-full bg-green-300 grid place-items-center animate-ping'>
                <div className='w-10 h-10 rounded-full bg-green-400 grid place-items-center'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default LoadingState