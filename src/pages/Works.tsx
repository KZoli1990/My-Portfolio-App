import ModernCard from '@/components/ModernCard';
import React from 'react';
import bg from '../../assets/work.png';
import bg2 from '../../assets/work2.png';
import bg3 from '../../assets/work3.png';

interface workProps {
  lang:boolean,
  scrollPage: number,
}

const Works:React.FC<workProps> = ({lang, scrollPage }) => {
  
  return (
    <section id='works' className='w-full h-screen flex flex-col  bg-[#081b29] snap-start duration-500'>
      <h2 className='text-3xl relative sm:text-4xl md:text-5xl xl:text-7xl text-center text-white font-bold mt-14'>{lang? "Munká" : "My "}<span className='text-[#1cd8fd]'>{lang? "im" : "Works"}</span>{scrollPage === 2 ? <span className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#081b29] animate-showRight"></span> : null}</h2>
      <div className="w-full mt-3 p-2 h-full grid gap-3 md:grid-cols-3 items-center ">
        <ModernCard delay={'0.5s'} scrollPage={scrollPage} text={lang? 'Ez a projekt a React.js és a Firebase kombinálásával készült.' : 'This project was built by combining React.js with Firebase.'} projectImg={bg} demoHref='/#' gitHubHref='/#'/>
        <ModernCard delay={'1s'} scrollPage={scrollPage} text={lang? 'Ez a projekt az Angular segítségével készült.' : 'This project was built with Angular.'} projectImg={bg2} demoHref='/#' gitHubHref='/#'/>
        <ModernCard delay={'1.5s'} scrollPage={scrollPage} text={lang? 'Ezt a projektet Next.js, TypeScript és MongoDB integrációval fejlesztették ki.' : 'This project was developed using Next.js, TypeScript, and MongoDB integration.'} projectImg={bg3} demoHref='/#' gitHubHref='/#'/>
      </div> 
    </section>
  )
}

export default Works