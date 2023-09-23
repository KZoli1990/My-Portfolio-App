'use client';
import React,{useState, useEffect} from 'react';
import Link from '../../node_modules/next/link';

interface ButtonProps {
    textColor:string,
    hoverColor:string,
    href:string,
    text:string,
    setScrollPage:React.Dispatch<React.SetStateAction<number>>
  }

const ModernButton:React.FC<ButtonProps> = ({textColor, hoverColor, href, text, setScrollPage}) => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    boxShadow: hovered ? `0 0 35px ${hoverColor}` : '',
    color: hovered? hoverColor : textColor,
    background: hovered? hoverColor : textColor
  };

  const fixedPageNum = () => {
    if(href === '/#about'){
      setTimeout(()=>{
        setScrollPage(1)
      },10)
    }else if(href === '/#contact'){
      setTimeout(()=>{
        setScrollPage(3)
      },10)
    }
  };

  return (
    <>
        <Link
            style={buttonStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={fixedPageNum}
            className={'relative uppercase text-[12px] max-h[46px] sm:text-xl font-medium m-1 py-2 px-9 hover:tracking-[0.25em] duration-300 before:absolute before:inset-[2px] before:bg-[#081b29] group'}
            href={href}><i className={`absolute inset-0 block 
                before:absolute before:top-0 before:left-[80%] before:w-3 before:h-1 before:bg-[#081b29] before:transform before:translate-x-[-50%] before:skew-x-[325deg] hover:before:duration-500 group-hover:before:w-[20px] group-hover:before:left-[20%]
                after:absolute after:bottom-0 after:left-[20%] after:w-3 after:h-1 after:bg-[#081b29] after:transform after:translate-x-[-50%] after:skew-x-[325deg] hover:after:duration-500 group-hover:after:w-[20px] group-hover:after:left-[80%]`}
            ></i><span className='relative z-10'>{text}</span>
        </Link>
    </>
  )
}

export default ModernButton