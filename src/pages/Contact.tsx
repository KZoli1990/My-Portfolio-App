'use client';
import React,{ useState} from 'react';
import emailjs from '../../node_modules/@emailjs/browser';
import {BiUpArrowCircle, BiSolidUpArrow} from '../../node_modules/react-icons/bi/index';
import Link from '../../node_modules/next/link';
import MsgSendLoading from '@/components/MsgSendLoading';
import {SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../secret';

interface contactProps {
  lang:boolean,
  scrollPage: number,
  setScrollPage:React.Dispatch<React.SetStateAction<number>>
}

const Contact:React.FC<contactProps> = ({ lang, scrollPage, setScrollPage}) => {
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [focus4, setFocus4] = useState(false);
  const [focus5, setFocus5] = useState(false);

  const [isSending, setIsSending] = useState(false);

  const [msgData, setMsgDate] = useState({
    fullName:'',
    email:'',
    mobileNumber:'',
    emailSubject:'',
    message:''
  });
  const {fullName, email, mobileNumber, emailSubject, message} = msgData;

  const possibleMobileChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '+', '-'];

  const handleChange:React.ChangeEventHandler<HTMLInputElement> & React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      setMsgDate({...msgData, [e.target.name]:e.target.value})
  };

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {

    setIsSending(true);
    try{
      const isValidMobileChar = mobileNumber.split('').every(char => possibleMobileChar.includes(char));
      if(fullName && email && mobileNumber && emailSubject && message){
        if (isValidMobileChar) {
          const form = e.target as HTMLFormElement;
          e.preventDefault();
          await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
          alert(lang? 'Üzenet küldés sikeres':'message sending is successful')
          setMsgDate({
            fullName:'',
            email:'',
            mobileNumber:'',
            emailSubject:'',
            message:''
          }) 
        } else {
          alert(`${lang? 'Hibás karakter került a telefonszámba, csak [0,1,2,3,4,5,6,7,8,9,/,+,-] karakter lehet!': 'A wrong character was entered in the phone number, only [0,1,2,3,4,5,6,7,8,9,/,+,-] characters are allowed!'}`)
        }
      } else {
        alert(`${lang? 'Az összes mező kitöltése kötelező! Ügyelj a telefonszámra, hogy csak [0,1,2,3,4,5,6,7,8,9,/,+,-] karakterből állhat!' : 'All fields must be filled in! Pay attention to the phone number, that it can only consist of [0,1,2,3,4,5,6,7,8,9,/,+,-] characters!'}`)
      }
    } catch(err:any) {
      console.log(err.message)
    } finally{
      setIsSending(false);
    }
  };

  return (
    <section id='contact' className='w-full min-h-screen flex flex-col justify-around items-center bg-[#0c283c] snap-start duration-500 overflow-hidden'>
    
    <h2 className='text-3xl relative sm:text-4xl md:text-5xl xl:text-7xl text-center text-white font-bold mt-14'>{lang? "Keress " : "Contact "} <span className='text-[#1cd8fd]'>{lang? "Meg!" : "Me!"}</span> {scrollPage === 3 ? <span className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}</h2>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
          <div className='grid sm:grid-cols-2'>

            <div className={`input relative m-1 p-2 py-6 sm:m-2 sm:p-3 sm:py-6 w-[250px] lg:w-[450px] before:absolute before:inset-[2px] before:bg-[#081b29] ${focus1? 'bg-[#1cd8fd] shadow-blue-35px duration-500':'bg-white duration-500'}`}>
                <i className={`absolute inset-0 block 
                        before:absolute before:top-0 before:h-1 before:bg-[#081b29] before:transform before:translate-x-[-50%] before:skew-x-[325deg] ${focus1? 'before:duration-500 before:w-[20px] before:left-[20%]':'before:left-[80%] before:w-3'}
                        after:absolute after:bottom-0 after:h-1 after:bg-[#081b29] after:transform after:translate-x-[-50%] after:skew-x-[325deg] ${focus1? 'after:duration-500 after:w-[20px] after:left-[80%]':'after:left-[20%] after:w-3'}`}
                ><input  
                onFocus={() => setFocus1(true)} 
                onBlur={() => setFocus1(false)}  
                type='text'
                className={`w-full p-[6px] mt-1 outline-none bg-transparent text-lg lg:text-xl relative ${focus1? 'placeholder:text-[#1cd8fd] text-[#1cd8fd]' : 'placeholder:text-white text-white'}`}
                placeholder={lang? 'Teljes Név...' : 'Full Name...'}
                onChange={handleChange}
                name='fullName'
                value={fullName}
                /></i>
                 {scrollPage === 3 ? <span style={{animationDelay: '0.5s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>
           

            <div className={`input relative m-1 p-2 py-6 sm:m-2 sm:p-3 sm:py-6 w-[250px] lg:w-[450px] before:absolute before:inset-[2px] before:bg-[#081b29] ${focus2? 'bg-[#1cd8fd] shadow-blue-35px duration-500':'bg-white duration-500'}`}>
                <i className={`absolute inset-0 block 
                        before:absolute before:top-0 before:h-1 before:bg-[#081b29] before:transform before:translate-x-[-50%] before:skew-x-[325deg] ${focus2? 'before:duration-500 before:w-[20px] before:left-[20%]':'before:left-[80%] before:w-3'}
                        after:absolute after:bottom-0 after:h-1 after:bg-[#081b29] after:transform after:translate-x-[-50%] after:skew-x-[325deg] ${focus2? 'after:duration-500 after:w-[20px] after:left-[80%]':'after:left-[20%] after:w-3'}`}
                ><input  
                onFocus={() => setFocus2(true)} 
                onBlur={() => setFocus2(false)}  
                type='email'
                className={`w-full p-[6px] mt-1 outline-none bg-transparent text-lg lg:text-xl relative ${focus2? 'placeholder:text-[#1cd8fd] text-[#1cd8fd]' : 'placeholder:text-white text-white'}`}
                placeholder={lang? 'Email@cím...' : 'Email@Adress...'}
                onChange={handleChange}
                name='email'
                value={email}
                /></i>
                {scrollPage === 3 ? <span style={{animationDelay: '1s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>
            

            <div className={`input relative m-1 p-2 py-6 sm:m-2 sm:p-3 sm:py-6 w-[250px] lg:w-[450px] before:absolute before:inset-[2px] before:bg-[#081b29] ${focus3? 'bg-[#1cd8fd] shadow-blue-35px duration-500':'bg-white duration-500'}`}>
                <i className={`absolute inset-0 block 
                        before:absolute before:top-0 before:h-1 before:bg-[#081b29] before:transform before:translate-x-[-50%] before:skew-x-[325deg] ${focus3? 'before:duration-500 before:w-[20px] before:left-[20%]':'before:left-[80%] before:w-3'}
                        after:absolute after:bottom-0 after:h-1 after:bg-[#081b29] after:transform after:translate-x-[-50%] after:skew-x-[325deg] ${focus3? 'after:duration-500 after:w-[20px] after:left-[80%]':'after:left-[20%] after:w-3'}`}
                ><input  
                onFocus={() => setFocus3(true)} 
                onBlur={() => setFocus3(false)}  
                type='string'
                className={`w-full p-[6px] mt-1 outline-none bg-transparent text-lg lg:text-xl relative ${focus3? 'placeholder:text-[#1cd8fd] text-[#1cd8fd]' : 'placeholder:text-white text-white'}`}
                placeholder={lang? 'Telefon Szám pl.:+3630/123-45-67' : 'Mobile Number...'}
                onChange={handleChange}
                name='mobileNumber'
                value={mobileNumber}
                /></i>
                {scrollPage === 3 ? <span style={{animationDelay: '1.5s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>
            

            <div className={`input relative m-1 p-2 py-6 sm:m-2 sm:p-3 sm:py-6 w-[250px] lg:w-[450px] before:absolute before:inset-[2px] before:bg-[#081b29] ${focus4? 'bg-[#1cd8fd] shadow-blue-35px duration-500':'bg-white duration-500'}`}>
                <i className={`absolute inset-0 block 
                        before:absolute before:top-0 before:h-1 before:bg-[#081b29] before:transform before:translate-x-[-50%] before:skew-x-[325deg] ${focus4? 'before:duration-500 before:w-[20px] before:left-[20%]':'before:left-[80%] before:w-3'}
                        after:absolute after:bottom-0 after:h-1 after:bg-[#081b29] after:transform after:translate-x-[-50%] after:skew-x-[325deg] ${focus4? 'after:duration-500 after:w-[20px] after:left-[80%]':'after:left-[20%] after:w-3'}`}
                ><input  
                onFocus={() => setFocus4(true)} 
                onBlur={() => setFocus4(false)}  
                type='text'
                className={`w-full p-[6px] mt-1 outline-none bg-transparent text-lg lg:text-xl relative ${focus4? 'placeholder:text-[#1cd8fd] text-[#1cd8fd]' : 'placeholder:text-white text-white'}`}
                placeholder={lang? 'Üzenet tárgya' : 'Email Subject...'}
                onChange={handleChange}
                name='emailSubject'
                value={emailSubject}
                /></i>
                 {scrollPage === 3 ? <span style={{animationDelay: '2s'}} className="absolute top-0 right-0 w-[140%] h-[140%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
            </div>
           

          </div>

          <div className={`textarea relative m-1 p-2 sm:m-2 sm:p-3 w-[250px] sm:w-[516px] lg:w-[916px] duration-500 before:absolute before:inset-[2px] before:bg-[#081b29] ${focus5? 'bg-[#1cd8fd] shadow-blue-35px duration-500':'bg-white duration-500'}`}>
            <i className={`absolute inset-0 block 
                    before:absolute before:top-0 before:h-1 before:bg-[#081b29] before:transform before:translate-x-[-50%] before:skew-x-[325deg] ${focus5? 'before:duration-500 before:w-[20px] before:left-[20%]':'before:left-[80%] before:w-3 before:duration-500'}
                    after:absolute after:bottom-0 after:h-1 after:bg-[#081b29] after:transform after:translate-x-[-50%] after:skew-x-[325deg] ${focus5? 'after:duration-500 after:w-[20px] after:left-[80%]':'after:duration-500 after:left-[20%] after:w-3'}`}
            ></i><textarea 
              onFocus={() => setFocus5(true)} 
              onBlur={() => setFocus5(false)}   
              cols={30} 
              rows={4} 
              className={`relative outline-none bg-transparent lg:text-xl w-full ${focus5? 'placeholder:text-[#1cd8fd] text-[#1cd8fd]' : 'placeholder:text-white text-white'}`}
              placeholder={lang? 'Üzenet írás...' : 'Message...'}
              name='message'
              value={message}
              onChange={handleChange}
            ></textarea>
            {scrollPage === 3 ? <span style={{animationDelay: '2.5s'}} className="absolute top-0 right-0 w-[140%] h-[140%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
          </div>
          

          <div className='send-btn relative m-1 p-2 w-[250px] sm:w-[516px] lg:w-[916px] duration-500 before:absolute before:inset-[2px] before:bg-[#081b29] hover:shadow-blue-35px bg-white hover:bg-[#1cd8fd] group cursor-pointer'>
            <i className={`absolute inset-0 block 
                    before:absolute before:top-0 before:left-[80%] before:w-3 before:h-1 before:bg-[#081b29] before:transform before:translate-x-[-50%] before:skew-x-[325deg] group-hover:before:duration-500 group-hover:before:w-[20px] group-hover:before:left-[20%]
                    after:absolute after:bottom-0 after:left-[20%] after:w-3 after:h-1 after:bg-[#081b29] after:transform after:translate-x-[-50%] after:skew-x-[325deg] group-hover:after:duration-500 group-hover:after:w-[20px] group-hover:after:left-[80%]`}
            ></i><button type='submit' className='w-full sm:text-xl relative group-hover:text-[#1cd8fd] duration-500'>{lang? 'Küldés' : 'Send'}</button>
            {scrollPage === 3 ? <span style={{animationDelay: '3s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
          </div>
          
        </form>

        <div className='arrow relative flex flex-col items-center sm:bottom-[-30px] w-full group'>
          <BiSolidUpArrow color={'#1cd8fd'} cursor={'pointer'} className='relative group-hover:rotate-180'/>
          {scrollPage === 3 ? <span style={{animationDelay: '3.5s'}} className="absolute top-0 right-0 w-full h-[120%] z-[98] bg-[#0c283c] animate-showRight"></span> : null}
          <footer className=' hidden w-full h-[40px] group-hover:flex justify-between items-center flex-wrap px-[9%] bg-[#081b29] duration-500'>
            <div>
                <p className='text-[9px] sm:text-sm'>Copyright &copy; 2023 {lang? 'Készítette Keresztényi Zoltán | Minden Jog Fenntartva.':'by Zoltan Keresztenyi | All Rights Reserved.'}</p>
            </div>

            <div>
                <Link href="/#home" onClick={() => setTimeout(()=>{setScrollPage(0)},20)} className='relative inline-flex justify-center items-center p-1 bg-[#1cd8fd] border-2 border-[#1cd8fd] rounded-lg'>
                    <BiUpArrowCircle color={'#081b29'} size={15} className='cursor-pointer'/>
                </Link>
            </div>
          </footer>
        </div>
        <MsgSendLoading isSending={isSending} lang={lang}/>
    </section>
  )
}

export default Contact