"use client";
import React,  { useState} from 'react';
import Link from '../../node_modules/next/link';
import { GiHamburgerMenu } from '../../node_modules/react-icons/gi/index';
import { AiOutlineClose } from '../../node_modules/react-icons/ai/index';
import Hu from '../../assets/hun.png';
import En from '../../assets/en.png';
import Logo from '../../assets/Logo.png';
import Image from "next/image";

interface NavbarProps {
  lang: boolean,
  handleLang:  () => void,
  scrollPage: number,
  setScrollPage:React.Dispatch<React.SetStateAction<number>>
}

const Navbar:React.FC<NavbarProps> = ({lang, handleLang, scrollPage, setScrollPage}) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  };

  const fixedPageNum = (page:string) => {
    if(page === 'home'){
      setTimeout(()=>{
        setScrollPage(0)
      },20)
    }else if(page === 'about'){
      setTimeout(()=>{
        setScrollPage(1)
      },20)
    }else if(page === 'works'){
      setTimeout(()=>{
        setScrollPage(2)
      },20)
    }else if(page === 'contact'){
      setTimeout(()=>{
        setScrollPage(3)
      },20)
    }
  }
  
  return (
    <div className='fixed h-20 z-[100] w-full'>
      <div className='flex justify-between items-center w-full h-full px-2 lg:px-16'>
        <div className='logo relative'>
          <Image
            src={Logo}
            alt="Logo"
            className="object-cover h-[160px] w-[160px]"
            layout="intrinsic"
          />
          {scrollPage === 0 ? <span className="absolute top-0 right-0 w-full h-[110%] z-[98] bg-[#081b29] animate-showRight"></span> : null}
        </div>
        <div className='navbar relative'>
          <ul className='hidden md:flex items-center'>

          <label htmlFor="lang">
              <div className='h-[30px] w-[60px] border-[#1cd8fd] border-2 rounded-full relative'>
                <Image
                  src={En}
                  alt="En-flag"
                  className="object-cover h-[25px] w-[25px] rounded-full absolute top-[1px] left-[1.5px]"
                  layout="intrinsic"
                />

                <div className={lang? 
                'border-[#1cd8fd] h-[25px] w-[25px] border-2 rounded-full absolute top-[1px] left-[1.5px] duration-500 bg-[#1cd8fd] z-50 cursor-pointer' : 
                'border-[#1cd8fd] h-[25px] w-[25px] border-2 rounded-full absolute top-[1px] left-[30.5px] duration-500 bg-[#1cd8fd] z-50 cursor-pointer'}
                ></div>
                
                <Image
                  src={Hu}
                  alt="Hu-flag"
                  className="object-cover h-[25px] w-[25px] rounded-full absolute top-[1px] left-[30.5px]"
                  layout="intrinsic"
              />
              </div>
            </label>
            <input onChange={handleLang} checked={lang} type="checkbox" id='lang' className='hidden'/>
            
            <Link href='/#home' onClick={() => fixedPageNum('home')}>
              <li className={`ml-10 text-sm uppercase duration-500 ${scrollPage === 0 ? 'text-xl text-[#1cd8fd] border-[#1cd8fd] border-b' :'hover:border-b text-white'}`}>{lang? 'Kezdőlap' : 'Home' }</li>
            </Link>
          
            <Link href='/#about' onClick={() => fixedPageNum('about')}>
              <li className={`ml-10 text-sm uppercase duration-500 ${scrollPage === 1 ? 'text-xl text-[#1cd8fd] border-[#1cd8fd] border-b' :'hover:border-b text-white'}`}>{lang? 'Rólam' : 'About'}</li>
            </Link>
         
            <Link href='/#works' onClick={() => fixedPageNum('works')}>
              <li className={`ml-10 text-sm uppercase duration-500 ${scrollPage === 2 ? 'text-xl text-[#1cd8fd] border-[#1cd8fd] border-b' :'hover:border-b text-white'}`}>{lang? 'Munkáim' : 'Works'}</li>
            </Link>
          
            <Link href='/#contact' onClick={() => fixedPageNum('contact')}>
              <li className={`ml-10 text-sm uppercase duration-500 ${scrollPage === 3 ? 'text-xl text-[#1cd8fd] border-[#1cd8fd] border-b' :'hover:border-b text-white'}`}>{lang? 'Kapcsolat' : 'Contact' }</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer text-white'>
            <GiHamburgerMenu size={25} />
          </div>
          {scrollPage === 0 ? <span style={{animationDelay: '1s'}} className="absolute top-0 right-0 w-full h-[110%] z-[98] bg-[#081b29] animate-showRight"></span> : null}
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div 
          className={
            nav 
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#0c283c] p-10 ease-in duration-500' : 
                'fixed left-[-150%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <div>
                <Image
                  src={Logo}
                  alt="Logo"
                  className="object-cover h-[160px] w-[160px]"
                  layout="intrinsic"
                />
              </div>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-[#1cd8fd] p-3 cursor-pointer'>
                <AiOutlineClose color='#1cd8fd'/>
              </div>
            </div>
            <div className='border-b border-[#1cd8fd] my-4'>
              <p className='w-[85%] md:w-[90%] text-[#1cd8fd] py-4'>{lang? 'Üdvözlöm a portfólió oldalamon mobilon is.' : "Welcome to my portfolio page on mobile as well."}</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
            <label htmlFor="lang">
              <div className='h-[30px] w-[60px] border-[#1cd8fd] border-2 rounded-full relative'>
                <Image
                  src={En}
                  alt="En-flag"
                  className="object-cover h-[25px] w-[25px] rounded-full absolute top-[1px] left-[1.5px]"
                  layout="intrinsic"
                />

                <div className={lang? 
                  'border-[#1cd8fd] h-[25px] w-[25px] border-2 rounded-full absolute top-[1px] left-[1.5px] duration-500 bg-[#1cd8fd] z-50 cursor-pointer' : 
                  'border-[#1cd8fd] h-[25px] w-[25px] border-2 rounded-full absolute top-[1px] left-[30.5px] duration-500 bg-[#1cd8fd] z-50 cursor-pointer'}
                ></div>
                
                <Image
                  src={Hu}
                  alt="Hu-flag"
                  className="object-cover h-[25px] w-[25px] rounded-full absolute top-[1px] left-[30.5px]"
                  layout="intrinsic"
              />
              </div>
            </label>
              <Link href='/#home' onClick={() => fixedPageNum('home')}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>{lang? 'Kezdőlap' : 'Home'}</li>
              </Link>
            
              <Link href='/#about' onClick={() => fixedPageNum('about')}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>{lang? 'Rólam' : 'About'}</li>
              </Link>
          
              <Link href='/#works' onClick={() => fixedPageNum('works')}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>{lang? 'Munkáim' : 'Works'}</li>
              </Link>
            
              <Link href='/#contact' onClick={() => fixedPageNum('contact')}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>{lang? 'Kapcsolat' : 'Contact' }</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar