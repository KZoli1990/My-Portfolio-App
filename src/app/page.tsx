'use client';
import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import HomePage from "@/pages/HomePage";
import Works from "@/pages/Works";
import React,{useState} from "react";


export default function Home() {
  const [lang, setLang] = useState<boolean>(false);
  const handleLang = () => setLang(!lang);

  const [scrollPage, setScrollPage] = useState(0);
  const handleScrollPage = (event: any) => {
    const newScrollPage = Math.floor(event.target.scrollTop / event.target.clientHeight);
  
    if (newScrollPage !== scrollPage) {
      setScrollPage(newScrollPage);
    }
  };
 
  return (
    <main className="relative snap-y snap-mandatory overflow-auto h-screen duration-500" onScroll={handleScrollPage}>
      <Navbar lang={lang} handleLang={handleLang} scrollPage={scrollPage} setScrollPage={setScrollPage}/>
      <HomePage lang={lang} scrollPage={scrollPage} setScrollPage={setScrollPage}/>
      <About lang={lang} scrollPage={scrollPage}/>
      <Works lang={lang} scrollPage={scrollPage}/>
      <Contact lang={lang} scrollPage={scrollPage} setScrollPage={setScrollPage}/>
    </main>
  );
}
