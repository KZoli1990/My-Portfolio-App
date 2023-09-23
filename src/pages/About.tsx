'use client';
import React,{ useState} from 'react';
import Image from '../../node_modules/next/image';
import Profile from '../../assets/profile.png'
import {BiLogoReact, BiLogoAngular, BiLogoTypescript, BiLogoGithub, BiLogoFirebase, BiLogoMongodb, BiLogoCss3, BiLogoBootstrap, BiLogoTailwindCss} from '../../node_modules/react-icons/bi/index';
import { SiNextdotjs, SiJavascript } from '../../node_modules/react-icons/si/index';
import WorkerItem from '../components/WorkerItem';

interface aboutProps {
  lang:boolean,
  scrollPage: number
}

const About:React.FC<aboutProps> = ({lang, scrollPage}) => {

  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState('');

  const handleModal = () => {
    setOpenModal(!openModal)
  };

 
  return (
    <section id='about' className='w-full h-screen flex items-end justify-between bg-[#0c283c] snap-start duration-500 '> 

      <div className='w-[26%] h-[100%] flex flex-col items-start justify-end sm:w-[35%]  md:w-[30%] lg:w-[25%] xl:w-[33%]'>
        {/* column1 */}

        <h3 className='hidden relative text-white md:block ms-2'>{lang? "Ezekkel a programozási nyelvekkel dolgozok":"I work with these programming languages"}{scrollPage === 1 ? <span className="absolute top-0 right-0 w-full h-[110%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}</h3>

        <div>
          <div className='flex my-3'>

            <div onClick={() => setItem('javaScript')} className='relative'>
              <div className='m-[2px] cursor-pointer opacity-50 flex flex-col items-center bg-[#081b29] p-4 h-[30px] w-[30px] rounded-full border-2  border-[#1cd8fd] group hover:opacity-100 duration-300 relative sm:h-[50px] sm:w-[50px] sm:m-3 lg:m-4 xl:h-[107px] xl:w-[107px]' onClick={handleModal}>
                <SiJavascript style={{minHeight:'22px', minWidth:'22px'}} color={'#efd81d'} className='absolute top-[5px] sm:top-3 sm:h-6 sm:w-6 '/>
                <span className='hidden absolute text-[#efd81d] sm:block top-14 text-sm'>JavaScript</span>
                <span className='hidden spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] md:group-hover:block absolute rounded-full bottom-[-7px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] xl:bottom-[-13px]'></span>
              </div>
              {scrollPage === 1 ? <span style={{animationDelay: '0.5s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>

            <div onClick={() => setItem('typeScript')} className='relative'>
              <div className='m-[2px] cursor-pointer opacity-50 flex flex-col items-center bg-[#081b29] p-4 h-[30px] w-[30px] rounded-full border-2  border-[#1cd8fd] group hover:opacity-100 duration-300 relative sm:h-[50px] sm:w-[50px] sm:m-3 lg:m-4 xl:h-[107px] xl:w-[107px]' onClick={handleModal}>
                <BiLogoTypescript style={{minHeight:'30px', minWidth:'30px'}} color={'#2f74c0'} className='absolute top-[2px] sm:top-[10px] sm:h-6 sm:w-6 '/>
                <span className='hidden absolute text-[#2f74c0] sm:block top-14 text-sm'>TypeScript</span>
                <span className='hidden spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] md:group-hover:block absolute rounded-full bottom-[-7px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] xl:bottom-[-13px]'></span>
              </div>
              {scrollPage === 1 ? <span style={{animationDelay: '1s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>
    
          </div>
        </div>

        <h3 className='hidden relative text-white md:block mt-4 ms-2'>{lang? "Ezekkel a keretrendszerekkel dolgozom":"I work with these frameworks"} {scrollPage === 1 ? <span style={{animationDelay: '3s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}</h3>

        <div>
          <div className='flex my-3'>

            <div onClick={() => setItem('react')} className='relative'>
              <div className='m-[2px] cursor-pointer opacity-50 flex flex-col items-center bg-[#081b29] p-4 h-[30px] w-[30px] rounded-full border-2  border-[#1cd8fd] group hover:opacity-100 duration-300 relative sm:h-[50px] sm:w-[50px] sm:m-3 lg:m-4 xl:h-[107px] xl:w-[107px]' onClick={handleModal}>
                <BiLogoReact style={{minHeight:'30px', minWidth:'30px'}} color={'#5ed3f3'} className='absolute top-[2px] sm:top-[10px] sm:h-6 sm:w-6 '/>
                <span className='hidden absolute text-[#5ed3f3] sm:block top-14 text-sm'>React.Js</span>
                <span className='hidden spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] md:group-hover:block absolute rounded-full bottom-[-7px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] xl:bottom-[-13px]'></span>
              </div>
              {scrollPage === 1 ? <span style={{animationDelay: '1s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>

            <div onClick={() => setItem('nextJs')} className='relative'>
              <div className='m-[2px] cursor-pointer opacity-50 flex flex-col items-center bg-[#081b29] p-4 h-[30px] w-[30px] rounded-full border-2  border-[#1cd8fd] group hover:opacity-100 duration-300 relative sm:h-[50px] sm:w-[50px] sm:m-3 lg:m-4 xl:h-[107px] xl:w-[107px]' onClick={handleModal}>
                <SiNextdotjs style={{minHeight:'30px', minWidth:'30px'}} color={'white'} className='absolute top-[1.5px] sm:top-[10px] sm:h-6 sm:w-6 '/>
                <span className='hidden absolute text-white sm:block top-14 text-sm'>Next.Js</span>
                <span className='hidden spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] md:group-hover:block absolute rounded-full bottom-[-7px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] xl:bottom-[-13px]'></span>
              </div>
              {scrollPage === 1 ? <span style={{animationDelay: '2s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>

            <div onClick={() => setItem('angular')} className='relative'>
              <div className='m-[2px] cursor-pointer opacity-50 flex flex-col items-center bg-[#081b29] p-4 h-[30px] w-[30px] rounded-full border-2  border-[#1cd8fd] group hover:opacity-100 duration-300 relative sm:h-[50px] sm:w-[50px] sm:m-3 lg:m-4 xl:h-[107px] xl:w-[107px]' onClick={handleModal}>
                <BiLogoAngular style={{minHeight:'30px', minWidth:'30px'}} color={'#d82d2f'} className='absolute top-[2px] sm:top-[10px] sm:h-6 sm:w-6 '/>
                <span className='hidden absolute text-red-700 sm:block top-14 text-sm'>Angular</span>
                <span className='hidden spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] md:group-hover:block absolute rounded-full bottom-[-7px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] xl:bottom-[-13px]'></span>
              </div>
              {scrollPage === 1 ? <span style={{animationDelay: '1.5s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>
    
          </div>
        </div>
      </div>

      <div className='w-[30%] h-full flex flex-col justify-between items-center lg:w-[40%]'>
        {/* column2 */}
        
        <h2 className='text-3xl relative sm:text-4xl md:text-5xl xl:text-7xl text-center text-white font-bold mt-14'>{lang? "Ról" : "About "}<span className='text-[#1cd8fd]'>{lang? 'am' : 'Me'}</span> {scrollPage === 1 ? <span style={{animationDelay: '3s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}</h2>
        
        
        <div  className="profile object-cover relative w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:w-[16rem] md:h-[16rem] xl:w-[20rem] xl:h-[20rem] mx-auto rounded-full flex justify-center items-center">
          <Image
            src={Profile}
            alt="En-flag"
            className="w-[90%] rounded-full border-2 border-[#1cd8fd]"
            layout="intrinsic"
          />
          <span className='absolute spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] w-full h-full rounded-full'></span>
          {scrollPage === 1 ? <span className="absolute top-0 right-0 w-[130%] h-[130%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
        </div>

        <div className='flex flex-col justify-start items-center my-3 relative'>
          <h3 className='hidden md:block'>{lang? "Ezt a porfólió oldalt eléred a Github fiókomba": "You can access this portfolio page in my Github account"}</h3>
          <a href="https://github.com/KZoli1990/My-Portfolio-App.git">
            <div className='m-[2px] cursor-pointer opacity-50 flex flex-col items-center bg-[#081b29] p-4 h-[30px] w-[30px] rounded-full border-2  border-[#1cd8fd] group hover:opacity-100 duration-300 relative sm:h-[50px] sm:w-[50px] sm:m-3 lg:m-4 xl:h-[107px] xl:w-[107px]'>
              <BiLogoGithub style={{minHeight:'30px', minWidth:'30px'}} color={'white'} className='absolute top-[2px] sm:top-[10px] sm:h-6 sm:w-6 '/>
              <span className='hidden absolute text-white sm:block top-14 text-sm'>Github</span>
              <span className='hidden spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] md:group-hover:block absolute rounded-full bottom-[-7px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] xl:bottom-[-13px]'></span>
            </div>
          </a>
          {scrollPage === 1 ? <span style={{animationDelay: '1.5s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
        </div>
            
      </div>


      <div className='w-[26%] h-[100%] flex flex-col items-end justify-end sm:w-[35%]  md:w-[30%] lg:w-[25%] xl:w-[33%]'>
        {/* column3 */}

        <h3 className='hidden md:block me-2 relative'>{lang? "Ezekkel az adatbázis kezelőkkel dolgoztam" : "I worked with these database managers"}{scrollPage === 1 ? <span style={{animationDelay: '3s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}</h3>

        <div>
          <div className='flex my-3'>

            <div onClick={() => setItem('firebase')} className='relative'>
              <div className='m-[2px] cursor-pointer opacity-50 flex flex-col items-center bg-[#081b29] p-4 h-[30px] w-[30px] rounded-full border-2  border-[#1cd8fd] group hover:opacity-100 duration-300 relative sm:h-[50px] sm:w-[50px] sm:m-3 lg:m-4 xl:h-[107px] xl:w-[107px]' onClick={handleModal}>
                <BiLogoFirebase style={{minHeight:'22px', minWidth:'22px'}} color={'#ffcb2b'} className='absolute top-[5px] sm:top-3 sm:h-6 sm:w-6 '/>
                <span className='hidden absolute text-[#ffcb2b] sm:block top-14 text-sm'>FireBase</span>
                <span className='hidden spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] md:group-hover:block absolute rounded-full bottom-[-7px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] xl:bottom-[-13px]'></span>
              </div>
              {scrollPage === 1 ? <span style={{animationDelay: '2.5s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>

            <div onClick={() => setItem('mongoDb')} className='relative'>
              <div className='m-[2px] cursor-pointer opacity-50 flex flex-col items-center bg-[#081b29] p-4 h-[30px] w-[30px] rounded-full border-2  border-[#1cd8fd] group hover:opacity-100 duration-300 relative sm:h-[50px] sm:w-[50px] sm:m-3 lg:m-4 xl:h-[107px] xl:w-[107px]' onClick={handleModal}>
                <BiLogoMongodb style={{minHeight:'30px', minWidth:'30px'}} color={'#3e9737'} className='absolute top-[2px] sm:top-[10px] sm:h-6 sm:w-6 '/>
                <span className='hidden absolute text-[#3e9737] sm:block top-14 text-sm'>MongoDB</span>
                <span className='hidden spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] md:group-hover:block absolute rounded-full bottom-[-7px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] xl:bottom-[-13px]'></span>
              </div>
              {scrollPage === 1 ? <span style={{animationDelay: '1.5s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>
    
          </div>
        </div>

        <h3 className='hidden md:block mt-4 me-2 relative'>{lang? "Ezekket a stílusleíró nyelveket használom" : "I use these style description languages"}{scrollPage === 1 ? <span style={{animationDelay: '3s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}</h3>

        <div>
          <div className='flex my-3 mt-0'>

            <div onClick={() => setItem('css')} className='relative'>
              <div className='m-[2px] cursor-pointer opacity-50 flex flex-col items-center bg-[#081b29] p-4 h-[30px] w-[30px] rounded-full border-2  border-[#1cd8fd] group hover:opacity-100 duration-300 relative sm:h-[50px] sm:w-[50px] sm:m-3 lg:m-4 xl:h-[107px] xl:w-[107px]' onClick={handleModal}>
                <BiLogoCss3 style={{minHeight:'30px', minWidth:'30px'}} color={'#254bdd'} className='absolute top-[2px] sm:top-[10px] sm:h-6 sm:w-6 '/>
                <span className='hidden absolute text-[#254bdd] sm:block top-14 text-sm'>Css/Scss</span>
                <span className='hidden spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] md:group-hover:block absolute rounded-full bottom-[-7px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] xl:bottom-[-13px]'></span>
              </div>
              {scrollPage === 1 ? <span style={{animationDelay: '2s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>

            <div onClick={() => setItem('bootstrap')} className='relative'>
              <div className='m-[2px] cursor-pointer opacity-50 flex flex-col items-center bg-[#081b29] p-4 h-[30px] w-[30px] rounded-full border-2  border-[#1cd8fd] group hover:opacity-100 duration-300 relative sm:h-[50px] sm:w-[50px] sm:m-3 lg:m-4 xl:h-[107px] xl:w-[107px]' onClick={handleModal}>
                <BiLogoBootstrap style={{minHeight:'30px', minWidth:'30px'}} color={'#6e11f4'} className='absolute top-[1.5px] sm:top-[10px] sm:h-6 sm:w-6 '/>
                <span className='hidden absolute text-[#6e11f4] sm:block top-14 text-sm'>Bootstrap</span>
                <span className='hidden spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] md:group-hover:block absolute rounded-full bottom-[-7px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] xl:bottom-[-13px]'></span>
              </div>
              {scrollPage === 1 ? <span style={{animationDelay: '0.5s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>

            <div onClick={() => setItem('tailwind')} className='relative'>
              <div className='m-[2px] cursor-pointer opacity-50 flex flex-col items-center bg-[#081b29] p-4 h-[30px] w-[30px] rounded-full border-2  border-[#1cd8fd] group hover:opacity-100 duration-300 relative sm:h-[50px] sm:w-[50px] sm:m-3 lg:m-4 xl:h-[107px] xl:w-[107px]' onClick={handleModal}>
                <BiLogoTailwindCss style={{minHeight:'30px', minWidth:'30px'}} color={'#39bef8'} className='absolute top-[2px] sm:top-[10px] sm:h-6 sm:w-6 '/>
                <span className='hidden absolute text-[#39bef8] sm:block top-14 text-sm'>Tailwind</span>
                <span className='hidden spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] md:group-hover:block absolute rounded-full bottom-[-7px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] xl:bottom-[-13px]'></span>
              </div>
              {scrollPage === 1 ? <span style={{animationDelay: '1s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>
    
          </div>
        </div>

      </div>
      <WorkerItem openModal={openModal} handleModal={handleModal} item={item} lang={lang}/>
    </section>
    
    
  )
}

export default About