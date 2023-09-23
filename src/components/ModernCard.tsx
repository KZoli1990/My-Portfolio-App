import React from 'react';


interface cardProps{
    text: string,
    projectImg: any,
    demoHref: string,
    gitHubHref: string,
    scrollPage: number,
    delay:string
}

const ModernCard:React.FC<cardProps> = ({text, projectImg, demoHref, gitHubHref, scrollPage, delay}) => {

  return (
    <div className='relative m-1 p-2 duration-500 before:absolute before:inset-[2px] before:bg-[#081b29] hover:shadow-blue-35px bg-white hover:bg-[#1cd8fd] group cursor-pointer'>
        <i className={`absolute inset-0 block 
                before:absolute before:top-0 before:left-[80%] before:w-3 before:h-1 before:bg-[#081b29] before:transform before:translate-x-[-50%] before:skew-x-[325deg] group-hover:before:duration-500 group-hover:before:w-[20px] group-hover:before:left-[20%]
                after:absolute after:bottom-0 after:left-[20%] after:w-3 after:h-1 after:bg-[#081b29] after:transform after:translate-x-[-50%] after:skew-x-[325deg] group-hover:after:duration-500 group-hover:after:w-[20px] group-hover:after:left-[80%]`}
        ></i><div style={{backgroundImage: `url(${projectImg.src})`}} className='relative z-10 w-full h-[80px] md:h-[300px] work'>
            <div className=" hidden w-full h-full bg-[rgba(28,216,253,.7)] group-hover:flex flex-col justify-around">
                <h3 className='text-black text-xs sm:text-lg text-center font-bold'>{text}</h3>
                <div className='flex justify-around'>
                    <a href={demoHref} className="relative inline-flex justify-center items-center w-24 text-xl rounded-xl font-medium border-2 border-[#1cd8fd] bg-[#1cd8fd] text-black cursor-pointer z-10 overflow-hidden before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#081b29] before:duration-500 before:-z-10 hover:before:w-full hover:text-[#1cd8fd]">Demo</a>
                    <a href={gitHubHref} className="relative inline-flex justify-center items-center w-24 text-xl rounded-xl font-medium border-2 border-[#1cd8fd] bg-[#1cd8fd] text-black cursor-pointer z-10 overflow-hidden before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#081b29] before:duration-500 before:-z-10 hover:before:w-full hover:text-[#1cd8fd]">GitHub</a>
                </div>
            </div>
        </div>
        {scrollPage === 2 ? <span style={{animationDelay: delay}} className="absolute top-0 right-0 w-full h-[120%] z-[100] bg-[#081b29] animate-showRight"></span> : null}
    </div>
  )
}

export default ModernCard