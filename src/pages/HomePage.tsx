'use client';
import React from 'react';
import ModernButton from '@/components/modernButton';

interface HomeProps {
  lang:boolean,
  scrollPage: number,
  setScrollPage:React.Dispatch<React.SetStateAction<number>>
}

const HomePage:React.FC<HomeProps> = ({lang, scrollPage, setScrollPage}) => {
  

  return (
    <section id='home' className='w-full h-screen flex items-end snap-start'>
      
      <div className='homeContainer w-[80%] h-[90%] flex flex-col justify-between sm:w-[65%] lg:w-[60%] sm:justify-around'>
          
      <h1 className='text-2xl ps-1 sm:ms-3 sm:text-4xl lg:text-5xl xl:text-7xl text-white font-bold relative inline-block'>{lang? "Helló ": "Hi I'm "}<span className='text-[#1cd8fd]'>{lang? "Keresztényi Zoltán" : "Zoltan Keresztenyi"}</span> {lang? "vagyok" : ""}{scrollPage === 0 ? <span style={{animationDelay: '1.5s'}} className="absolute top-0 right-0 w-full h-[110%] z-[98] bg-[#081b29] animate-showRight animation-delay-3000"></span> : null}</h1>
        
        <div>
          <h2 className='text-2xl ps-1 sm:ms-3 sm:text-3xl md:text-4xl xl:text-6xl text-transparent font-bold dev-stroke'>Frontend Web {lang? 'Fejlesztő': 'Developer'}{scrollPage === 0 ? <span style={{animationDelay: '2s'}} className="absolute top-0 right-0 w-full h-[110%] z-[98] bg-[#081b29] animate-showRight"></span> : null}</h2>
          
        </div>
        
        
        <p className='text-[9px] min-[410px]:text-[12px] sm:text-sm sm:m-1 lg:text-[17px] p-2 relative'>{ lang? `Több mint 5 éve foglalkozom CNC programozással. 
          Munka után frontend fejlesztőként gyakorolom és fejlesztem magam. Sajnos a CNC programozás hanyatlásnak 
          indul, ezért kezdtem el más szakmák után nézni, és a frontend fejlesztés vonzott a legjobban. 
          2021-ben elkezdtem tanulni a HTML + CSS + JAVASCRIPT alapjait YouTube videókon keresztül. 2022-ben beiratkoztam a 
          Webler Stúdió frontend tanfolyamára, ahol 2023-ban sikeresen levizsgáztam. A következőket tanultuk:
          HTML, CSS, Bootstrap, JavaScript, GitHub, Node.js, Express.js, Sass/SCSS, React.js és Angular. 
          A tanfolyam elvégzése után elkezdtem gyakorolni a Next.js-t TypeScript, Tailwind CSS és MongoDB segítségével, 
          remélve, hogy ezen a területen tudok elhelyezkedni. Jelenleg napi 4-5 órát gyakorolok. Szívesebben dolgoznék 
          otthonról, de heti 1-2 nap ingázást is kibírok, ha kell, lehetőleg magyar céggel, mert az angoltudásom még csak 
          szövegértési szinten van, és sokszor fordítóra támaszkodom. Viszont dolgozom az angol tudásom fejlesztésén. 
          Köszönöm, hogy időt szánt ennek elolvasására.`: 
          `I have been working in CNC programming for over 5 years now. After work, I practice 
          and improve myself as a frontend developer. Unfortunately, CNC programming is starting to 
          decline, which is why I began looking into other professions, and frontend development appealed to
            me the most. In 2021, I started learning the basics of HTML + CSS + JAVASCRIPT through YouTube videos. 
            In 2022, I enrolled in a web development course at Webler Studio, where I successfully passed the exam in 2023.
          Here's what we learned: HTML, CSS, Bootstrap, JavaScript, GitHub, Node.js, Express.js, Sass/SCSS, React.js, 
          and Angular. After completing the course, I started practicing Next.js with TypeScript, Tailwind CSS, and MongoDB, 
          hoping to find employment in this field. Currently, I'm practicing for 4-5 hours a day. I would prefer to work from home, 
          but I can manage 1-2 days of commuting per week if needed, preferably with a Hungarian company because my English is only 
          at a comprehension level, and I often rely on a translator. However, I'm working on improving my English skills. 
          Thank you for taking the time to read this.`}
          {scrollPage === 0 ? <span style={{animationDelay: '2.5s'}} className="absolute top-0 right-0 w-full h-full z-[98] bg-[#081b29] animate-showRight"></span> : null}
        </p>
        <div className='sm-h-flex flex flex-col justify-center sm:flex-row items-center sm:justify-around'>
          <div className='w-[50%] flex justify-center relative'>
            <ModernButton textColor='#1cd8fd' hoverColor='blue' text={lang? 'Alkalmazz' : 'Hire Me'} href='/#about' setScrollPage={setScrollPage}/>
            {scrollPage === 0 ? <span style={{animationDelay: '3s'}} className="absolute top-0 right-0 w-[140%] h-full z-[98] bg-[#081b29] animate-showRight"></span> : null}
          </div>
          <div className='w-[50%] flex justify-center relative'>
            <ModernButton textColor='blue' hoverColor='#1cd8fd' text={lang? 'Beszéljünk' : "Let's talk"} href='/#contact' setScrollPage={setScrollPage}/>
            {scrollPage === 0 ? <span style={{animationDelay: '3.5s'}} className="absolute top-0 right-0 w-[140%] h-full z-[98] bg-[#081b29] animate-showRight"></span> : null}
          </div>
        </div>
      </div>
      <div className='profileContainer w-0 sm:w-[35%] lg:w-[40%] h-screen hover:bg-[#081b29]/80 duration-1000 relative'>{scrollPage === 0 ? <span style={{animationDelay: '4s'}} className="absolute top-0 right-0 w-full h-[110%] z-[98] bg-[#081b29] animate-showRight"></span> : null}</div>
    </section>
  )
}

export default HomePage