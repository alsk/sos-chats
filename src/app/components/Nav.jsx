"use client";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef} from 'react';






export default function Nav(props) {
    const pathname = usePathname();

    const [scrollLimitPassed, setScrollLimitPassed] = useState(false)
    const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0)
    const [pageLength, setPageLength] = useState(0)


    const nav = useRef();
    const isActivePath = (href) => pathname === href || pathname.startsWith(`${href}/`);

	// useGSAP(() => {
    //     gsap.set('.nav', {opacity: 1})
	// 	gsap.set('.mobile-hero-logo', {opacity: 1})
	// 	gsap.set('.hamburger', {opacity: 1})
	// 	gsap.fromTo('.mobile-hero-logo', {opacity:0, y:40}, {opacity:1, y:0, duration: 2, delay: 0.4, ease:'expo.out', stagger: 0.14})
    //     gsap.fromTo('.nav a', {opacity:0, y:-40,}, {opacity:1, y:0, duration: 2, delay: 0.4, stagger: 0.05,ease:'expo.out'})
    //     gsap.fromTo('.stag', {opacity:0, y:40}, {opacity:1, y:0, duration: 2, delay: 0.5, ease:'expo.out', stagger: 0.14})
	// });




    useEffect(() => {

        const handleScroll = ()=>{
            const position = window.pageYOffset;
            setScrollPosition(position);
            window.pageYOffset > 10 ? setScrollLimitPassed(true) : setScrollLimitPassed(false)
        };

        const handleResize = ()=>{
            const length = document.documentElement.scrollHeight - window.innerHeight;
            setPageLength(length);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        handleResize(); // Call initially to set the page length
        
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    return (
        <>


            <nav ref={nav} className={`nav ${scrollLimitPassed ? `scrolled` : ''} ${isMobileNavOpened ? `mobile-nav-opened` : ''} ${props.fixed ? 'fixed' : ''} `}>

                <div className="nav-content guard">
                    {/* <a href="./#" className="logo" onClick={()=>{setIsMobileNavOpened(false)}}><img src="./assets/logo.svg"></img></a> */}

                    {/* <Link href="/" className="logo" aria-label="SOS Chats Haute-Dordogne, accueil">
                        <img src={`${basePath}/assets/logo-simple.svg`} alt="" />
                    </Link> */}

                    <div className="links" onClick={()=>{setIsMobileNavOpened(false)}}>
                        <Link href="/" className={pathname === "/" ? "active" : ""}>Accueil</Link>
                        <Link href="/nos-actions" className={isActivePath("/nos-actions") ? "active" : ""}>Nos actions</Link>
                        <Link href="/nous-aider" className={isActivePath("/nous-aider") ? "active" : ""}>Nous aider</Link>
                        <Link href="/contact" className={isActivePath("/contact") ? "active" : ""}>Contact</Link>
                        <Link href="/nous-aider#don" className={`${isActivePath("/nous-aider") ? "active " : ""}cta`}>Faire un don</Link>
                    </div>
                </div>
            
            </nav>


            <div className={`hamburger stag ${isMobileNavOpened ? `opened` : ''}`} onClick={() => {setIsMobileNavOpened(!isMobileNavOpened)}}>
                <div></div>
            </div>  
        </>
    )

}