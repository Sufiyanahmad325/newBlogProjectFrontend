import React, { useEffect, useState } from 'react'

function LodingPage() {

    const [dot, setDot] = useState('')


    useEffect(()=>{
        let timer ;

        timer = setInterval(()=>{
            if(dot.length > 4){
                setDot('.')
            }
            else{
                setDot(prev=> prev += '.')
            }
        },500)

        return ()=> clearInterval(timer)

    } ,[dot])
    
    return (
        <div className="fixed inset-0 flex justify-center items-center flex-col
                        bg-black/40 backdrop-blur-sm z-50 gap-2">

            <div className="w-20 h-20 border-9 border-gray-300 
                            border-t-green-400 rounded-full animate-spin">                  
            </div>

            <p className='text-2xl text-white'> Loading{dot}</p>

        </div>
    )
}

export default LodingPage
