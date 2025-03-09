import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Context } from '../context/context'
const Main = () => {
  const prompt =["Suggest beautiful places to see on an upcoming road trip","Briefly summarize this concept: urban planning","Brainstorm team bonding activities for our work retreat","Improve the readability of the following code"]

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);


  return (
    <div className='bg-[#121212] w-screen h-screen flex justify-between flex-col items-center'>
{/* NAV */}
      <div className='flex justify-between items-center w-[100%] p-4'>
        <p className='font-bold text-xl text-[#ffffff] pl-16 sm:pl-0'>Gemini</p>
        <img src={assets.user_icon} className='size-10 rounded-full '/>
      </div>
{/* Heading */}
          {!showResult ? <div className='flex flex-col gap-6'><div>
                <p className=' text-xl sm:text-6xl gradient '>Hello,Dev.</p>
                <p className=' text-xl sm:text-6xl text-[#E0E0E0]'>How can I help you ?</p>
              </div>
              <div className='hidden sm:grid sm:grid-cols-2 gap-6 '>
                {
                  prompt.map((cmd,index)=>(
                    <div key={index} className='card p-2 lg:p-4 h-auto w-80 rounded-lg text-[#A0A0A0] font-medium justify-between flex flex-col cursor-pointer text-sm lg:text-lg '>
                      {cmd}
                      <img src={assets.bulb_icon} className='flex justify-end size-6'/>
                    </div>
                  ))
                }
                </div></div>:
                <div className=' justify-start w-[100%] sm:px-[15%] h-[75%] px-4 overflow-y-auto'>
                  <div className='result-title flex gap-6 items-center justify-end'>
                    <p className='p-2 rounded-lg bg-[#1E1E1E] text-[#E0E0E0] w-auto px-2 '>{recentPrompt}</p>
                    <img src={assets.user_icon} className='size-8 sm:size-12 rounded-full'/>
                  </div>
                  <div className='result-data flex w-[90%] items-top mt-6'>
                    <img src={assets.gemini_icon} className='size-8 sm:size-12' />
                    { loading?
                      <div className='w-[90%] flex flex-col gap-4'>
                        <hr className='load h-4 rounded-md opacity-25'/>
                        <hr className='load h-4 rounded-md opacity-25'/>
                        <hr className='load h-4 rounded-md opacity-25'/>
                      </div>
                      :<div><p dangerouslySetInnerHTML={{__html:resultData}} className='pl-4 overflow-y-auto text-[#E0E0E0] text-2xl sm:text-base '></p></div>

                    }
                    
                  </div>
                </div>
                }
      
{/* Text area */}
      <div className='border-2 card rounded-full border-zinc-800 w-[85%] h-[5%] sm:h-[7%] sm:w-[60%] flex mb-4 items-center sm:p-4 justify-between'>
          <input placeholder='Ask anything...' className='outline-none ml-2 w-[60%] sm:w-[80%] text-[#E0E0E0] bg-transparent ' onChange={(e)=>setInput(e.target.value)} value={input} type='text' />
          <div className='flex gap-4 items-center p-1 bg-[#a0a0a0] rounded-full'>
            <img src={assets.send_icon} className='size-6 cursor-pointer' onClick={()=>onSent()} />
          </div>
      </div>
    </div>
  )
}

export default Main