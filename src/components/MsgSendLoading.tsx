import React from 'react';

interface MsgSendLoadingProps{
    isSending:boolean,
    lang:boolean
}

const MsgSendLoading:React.FC<MsgSendLoadingProps> = ({isSending, lang}) => {
  return (
    <div className={isSending ? `w-full h-screen  bg-black/50 fixed top-0 flex items-center justify-center z-[100]` : ` hidden`}>
        <div className='relative flex items-center justify-center h-[300px] w-[300px] bg-[#011015] rounded-full'>
            <div className='absolute h-[200px] w-[200px] border-0 border-[#011015] border-b-8 border-b-[rgb(255,0,255)] rounded-full animate-loadingRotate1'></div>
            <div className='absolute h-[200px] w-[200px] border-0 border-[#011015] border-r-8 border-r-[rgb(0,247,255)] rounded-full animate-loadingRotate2'></div>
            <div className='absolute h-[200px] w-[200px] border-0 border-[#011015] border-t-8 border-t-[rgb(0,255,13)] rounded-full animate-loadingRotate3'></div>
            <span className='text-white'>{lang? 'Üzenet küldése...' : 'Sending...'}</span>
        </div>
        
    </div>
  )
}

export default MsgSendLoading