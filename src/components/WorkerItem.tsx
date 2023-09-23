'use client';
import React, {useState, useEffect } from 'react';
import {BiLogoReact, BiLogoAngular, BiLogoTypescript, BiLogoFirebase, BiLogoMongodb, BiLogoCss3, BiLogoBootstrap, BiLogoTailwindCss} from '../../node_modules/react-icons/bi/index';
import { IoMdCloseCircle} from '../../node_modules/react-icons/io/index';
import {SiJavascript, SiNextdotjs } from '../../node_modules/react-icons/si/index';

interface WorkerProps {
   openModal:boolean,
   handleModal:()=> void,
   item:string,
    lang:boolean
  }

const WorkerItem:React.FC<WorkerProps> = ({openModal, handleModal, item, lang}) => {

    const [icon, setIcon] = useState<JSX.Element | null>();
    const [title, setTitle] = useState<JSX.Element | null>();
    const [minTitle, setMinTitle] = useState<JSX.Element | null>();
    const [text, setText] = useState('');

    useEffect(() => {
        if(item === 'javaScript'){
            setTitle( <h3 className='text-4xl text-[#efd81d] font-bold mt-5 mb-10'>JavaScript</h3>);
            setIcon(<SiJavascript size={35} color={'#efd81d'} className='mt-1'/>);
            setMinTitle(<span className='text-[#efd81d]'>JavaScript</span>);
            setText(`${lang? "A javaScriptet 2021-ben kezdtem el használni elejébe a sima vanillaJs majd az OOP-ben, és végül a React.js-ben, JS-el kódoltam a legtöbbet és szeretem is használni, szerintem egyszerűbb mint a typeScript, de a hibakezelés szempontjából inkább a typeScriptet választom.": "I started using JavaScript in 2021, beginning with plain vanillaJS, then diving into OOP, and finally delving into React.js. I coded most with JavaScript, and I enjoy using it. I find it simpler than TypeScript, but when it comes to error handling, I prefer TypeScript."}`)
        } else if(item === 'typeScript'){
            setTitle( <h3 className='text-4xl text-[#2f74c0] font-bold mt-5 mb-10'>TypeScript</h3>);
            setIcon(<BiLogoTypescript size={35} color={'#2f74c0'} className='mt-1'/>);
            setMinTitle(<span className='text-[#2f74c0]'>TypeScript</span>);
            setText(`${lang? "2022-ben kezdtem el először dolgozni a TypeScripttel az Angular keretrendszeren belül. Jelenleg TypeScriptet használok a Next.js-szel, és folyamatosan fejlesztem tudásomat YouTube-videók segítségével. Legfőbb célom az, hogy ezen a téren kiemelkedő teljesítményt nyújtsak.": "I began working with TypeScript for the first time in 2022 within the Angular framework. Currently, I am using TypeScript with Next.js, and I am continuously improving my skills through YouTube videos. My main goal is to excel in this area."}`)
        } else if(item === 'react'){
            setTitle( <h3 className='text-4xl text-[#5ed3f3] font-bold mt-5 mb-10'>React.Js</h3>);
            setIcon(<BiLogoReact size={35} color={'#2f74c0'} className='mt-1'/>);
            setMinTitle(<span className='text-[#5ed3f3]'>React.Js</span>);
            setText(`${lang? "2022 elején elkezdtem tanulni a Reactet az iskolában. Jártas vagyok a REST API-kommunikáció kezelésében, a hookok használatában, beleértve a useContextet is, és van még egy projektem is, ahol létrehoztam egy privát üzenetküldőt Firebase integrációval, mindezt JavaScriptben. Ha van erre igény, akkor több mint hajlandó vagyok ebben az irányban folytatni.": "At the beginning of 2022, I started learning React through school. I'm proficient in handling REST API communication, using hooks, including useContext, and I even have a project where I created a private messenger with Firebase integration, all in JavaScript. If there's demand for this, I'm more than willing to continue in this direction."}`)
        } else if(item === 'nextJs'){
            setTitle( <h3 className='text-4xl text-white font-bold mt-5 mb-10'>Next.js</h3>);
            setIcon(<SiNextdotjs size={35} color={'white'} className='mt-1'/>);
            setMinTitle(<span className='text-white'>Next.js</span>);
            setText(`${lang? "Mivel a Next.js nem szerepelt az iskolai tantervben, YouTube-videók segítségével gyakoroltam, és nagyon szeretek vele dolgozni. Megtanultam ennek különböző aspektusait, például különböző útvonalak(rout)-ok használatát, CRUD műveletek végrehajtását Axios vagy JSON webszerverekkel. Az utóbbi időben FullStack projekteken dolgozom MongoDB integrációval, és ezek közül egyet megtalálsz a portfóliómban. Itt kezdtem el használni a Tailwind CSS-t, és azóta szinte minden stílust ezzel írok. Maga a portfólióoldal Next.js, TypeScript és Tailwind CSS használatával jött létre. ":"Since Next.js wasn't included in the school curriculum, I've been practicing it using YouTube videos, and I really enjoy working with it. I've learned various aspects of it, such as using different routes, performing CRUD operations with Axios or JSON web servers. Lately, I've been working on FullStack projects with MongoDB integration, and you can find one of them in my portfolio. That's where I started using Tailwind CSS, and since then, I've been using it for almost everything. This portfolio website itself was created using Next.js, TypeScript, and Tailwind CSS."}`)
        }  else if(item === 'angular'){
            setTitle( <h3 className='text-4xl text-red-700 font-bold mt-5 mb-10'>Angular</h3>)
            setIcon(<BiLogoAngular size={35} color={'#d82d2f'} className='mt-1'/>);
            setMinTitle(<span className='text-red-700'>Angular</span>);
            setText(`${ lang? "Nem sokat dolgoztam az Angularral; Kezdő szinten vagyok ebben a keretben. Viszont levizsgáztam benne, és ha találok álláslehetőséget Angularban, akkor hajlandó vagyok újra gyakorolni. Alternatív megoldásként, ha találok egy mentort, aki tud segíteni ezen a területen, szívesen dolgozom vele. Korábbi munkáim között van tapasztalatom egy Angular projekttel is." : "I haven't worked much with Angular; I'm at a beginner level in this framework. However, I passed my exam in it, and if I can find a job opportunity in Angular, I'm willing to start practicing it again. Alternatively, if I find a mentor who can assist me in this area, I'd be happy to work with them. I also have experience with an Angular project among my previous works."}`)
        }   else if(item === 'firebase'){
            setTitle( <h3 className='text-4xl text-[#ffcb2b] font-bold mt-5 mb-10'>Firebase</h3>)
            setIcon(<BiLogoFirebase size={35} color={'#ffcb2b'} className='mt-1'/>);
            setMinTitle(<span className='text-[#ffcb2b]'>Firebase</span>);
            setText(`${ lang? "Az iskolában kötelező volt. 2022-ben kezdtünk el vele dolgozni. A következőkkel foglalkoztunk: hitelesítés, Firestore-adatbázis és tárolás. Vanilla JavaScriptet és React.js-t használtam. Az üzenetküldő alkalmazást a React.js és a Firebase összekapcsolásával hoztam létre.":"It was mandatory at school. We began working with it in 2022. What we covered included: Authentication, Firestore Database, and Storage. I used vanilla JavaScript and React.js. I created the messenger app by connecting React.js with Firebase."}`)
        }    else if(item === 'mongoDb'){
            setTitle( <h3 className='text-4xl text-[#3e9737] font-bold mt-5 mb-10'>MongoDB</h3>)
            setIcon(<BiLogoMongodb size={35} color={'#3e9737'} className='mt-1'/>);
            setMinTitle(<span className='text-[#3e9737]'>MongoDB</span>);
            setText(`${ lang? "A MongoDB sajnos nem szerepelt a tananyagban, így YouTube videókon keresztül fejlesztem vele képességeimet. Sikerült átfogó tudást elsajátítanom, és mára különböző bejelentkezési lehetőségeket készíthetek és CRUD műveleteket hajthatok végre vele. A Next.js-szal együtt használom FullStack alkalmazások létrehozásához. Jelenleg hatékonyan tudok vele dolgozni, de a jövőben szükségem lesz mentorálásra. Korábbi munkáim között megtalálható egy Next.js + MongoDB FullStack alkalmazás.":"MongoDB was unfortunately not included in the curriculum, so I've been developing my skills with it through YouTube videos. I've managed to acquire comprehensive knowledge and can now create various login forms and perform CRUD operations with it. I use it in conjunction with Next.js to build FullStack applications. I'm currently able to work with it effectively, but I will need mentoring in the future. Among my previous works, you can find a Next.js + MongoDB FullStack application."}`)
        }   else if(item === 'css'){
            setTitle( <h3 className='text-4xl text-[#254bdd] font-bold mt-5 mb-10'>Css/Scss</h3>)
            setIcon(<BiLogoCss3 size={35} color={'#254bdd'} className='mt-1'/>);
            setMinTitle(<span className='text-[#254bdd]'>Css/Scss</span>);
            setText(`${ lang? "Már az iskolakezdés előtt ismertem a CSS stílusnyelvet. 2021-ben kezdtem el dolgozni a HTML + CSS-szel, és még mindig használom, de leginkább olyan dolgokra, amelyeket a Tailwinddel nem lehet megoldani. Van némi tapasztalatom az SCSS-sel vanilla.js-ben és React.js-ben, mivel jó megoldást nyújt egymásba ágyazáshoz és különféle ciklusokhoz. A CSS-keretrendszerek, például a Bootstrap és a Tailwind elérhetősége miatt azonban már nem használom az SCSS-t. Ennek ellenére, ha van rá igény, több mint hajlandó vagyok visszatérni az SCSS használatához.":"I was already familiar with the CSS styling language before starting school. I began working with HTML + CSS in 2021, and I still use it, but mostly for things that can't be solved with Tailwind. I have some experience with SCSS in vanilla.js and React.js, as it provides a good solution for nesting and various loops. However, with the availability of CSS frameworks like Bootstrap and Tailwind, I no longer use SCSS. Nevertheless, if there is a demand for it, I'm more than willing to return to using SCSS."}`)
        }   else if(item === 'bootstrap'){
            setTitle( <h3 className='text-4xl text-[#6e11f4] font-bold mt-5 mb-10'>Bootstrap</h3>)
            setIcon(<BiLogoBootstrap size={35} color={'#6e11f4'} className='mt-1'/>);
            setMinTitle(<span className='text-[#6e11f4]'>Bootstrap</span>);
            setText(`${ lang? "A Bootstrap volt a legelső CSS-keretrendszer, amelyről átfogó ismereteket szereztem. 2021-ben már készítettem vele HTML+Bootstrap oldalakat. A React.js-ben nagyon tetszett, hogy a Bootstrap-et különálló összetevőként használhatod. Az Angular keretein belül is széles körben használtam. A vizsgán az Angular + Bootstrap használata volt az elvárás.":"Bootstrap was the very first CSS framework I gained comprehensive knowledge of. In 2021, I already created HTML+Bootstrap pages with it. What I really liked about React.js is that you can use Bootstrap as separate components. I also used it extensively within the Angular framework. For the exam, the expectation was to use Angular + Bootstrap."}`)
        }   else if(item === 'tailwind'){
            setTitle( <h3 className='text-4xl text-[#39bef8] font-bold mt-5 mb-10'>Tailwind CSS</h3>)
            setIcon(<BiLogoTailwindCss size={35} color={'#39bef8'} className='mt-1'/>);
            setMinTitle(<span className='text-[#39bef8]'>Tailwind</span>);
            setText(`${ lang? "A Tailwind CSS-t a Next.js gyakorlása során kezdtem el használni. A legtöbb oktatóvideó ezt használja, és személy szerint jobban szeretem használni a Bootstrap helyett. Rengeteg megoldást kínál. Ez a portfóliówebhely maga csak Tailwind stílusokat használ, minimális CSS- és beépített CSS-komponensekkel.":"I began using Tailwind CSS when practicing Next.js. Most tutorial videos use it, and personally, I prefer using it over Bootstrap. It offers a plethora of solutions. This portfolio website itself uses only Tailwind styles, with minimal CSS and inline CSS components."}`)
        }
    },[item, lang])

  return (
    <div className={openModal ? `w-full h-screen bg-black/50 fixed top-0 flex items-center justify-center z-[100]` : ` hidden`}>
        
        <div className='w-[95%] h-[95%] mt-20 lg:w-[65%] md:h-[70%] lg:mt-0 bg-[#0c283c] flex flex-col items-center rounded-3xl relative'>
            <IoMdCloseCircle size={35} color='white' className='absolute right-0 m-4 cursor-pointer' onClick={handleModal}/>
            {title}
            
           <div className='m-2 flex flex-col items-center bg-[#081b29] p-4 h-[107px] w-[107px] rounded-full border-2 border-[#1cd8fd] relative my-4'>
                {icon}
                {minTitle}
                <span className='spiner transform rotate-0 border-[0.1rem] border-t-[#1cd8fd] border-b-[#1cd8fd] border-l-[#0c283c] border-r-[#0c283c] absolute w-[130px] h-[130px] rounded-full bottom-[-13px]'></span>
            </div>
            <div className='w-[70%] mx-auto mt-2'>
                <p className='text-[10px] sm:text-[16px]'>{text}</p>    
            </div>
             
        </div>
        
    </div>
  )
}

export default WorkerItem