import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import FooterRecentPostLinks from "./sub_components/_footerRecentPostLinks";

const Footer = () => {

    const scrollToTop = () => {
        scrollTo({
            top: 0,
            right: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {

        window.onscroll = () => {

            let scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

            if (document.documentElement.scrollTop >= 200 || document.body.scrollTop >= 200) {
                scrollToTopBtn.classList.add('show-to-top-btn');
            } else {
                scrollToTopBtn.classList.remove('show-to-top-btn');
            }

        };

    }, []);

    return (
        <>
            
            <footer className="bg-[#030313] text-white">

                <div className="grid items-baseline gap-8 py-6 px-4 lg:grid-cols-12 lg:p-12">

                    <div className="grid gap-2 lg:col-span-4">
                        
                        <h3 className="text-xl font-luckiest-guy">
                            Recent Posts
                        </h3>

                        <ul className="grid gap-2">

                            <FooterRecentPostLinks />

                        </ul>

                    </div>

                    <div className="grid gap-2 lg:col-span-4">

                        <h3 className="text-xl font-luckiest-guy">
                            About Poet's Elixir
                        </h3>

                        <div className="grid gap-2">

                            <p>
                                Poetry is medicine for the soul, an avenue through which we express our innermost thoughts and give interpretations of nature and the things around us.
                            </p>

                            <p>
                                <Link href="/"><a className="text-sky-200 hover:underline hover:underline-offset-[3px] hover:decoration-sky-300">Poet's Elixir</a></Link> provides an avenue where we can share our beautiful poems for the enjoyment of others.
                            </p>

                        </div>
                                            
                    </div>
                    
                    <div className="grid gap-2 lg:col-span-4">

                        <h3 className="text-xl font-luckiest-guy">
                            We Are Social!
                        </h3>

                        <div className="grid gap-2">

                            <p>
                                Have a poem or a suggestion for us, a feature you'll like us to add or a bug to report? We'll love to hear from you.
                            </p>

                            <p className="flex items-center gap-4">

                                <a className="bg-sky-700 rounded-full text-xl hover:animate-pulse active:animate-pulse text-white" href="https://web.facebook.com/IamWisdomOjimah" target="_blank" rel="noopener noreferrer" aria-label="Contact us on Facebook" title="Reach us on Facebook">
                                    <i className="fab fa-facebook-f text-base relative py-2 px-[0.7rem]"></i>
                                </a>
                                
                                <a className="bg-white rounded-full text-xl text-gray-700 hover:animate-pulse active:animate-pulse" href="https://github.com/detachedsoul" target="_blank" rel="noopener noreferrer" aria-label="GitHub account" title="GitHub account">
                                    <i className="fab fa-github text-base relative left-[0.03rem] py-2 px-2"></i>
                                </a>

                                <a className="bg-blue-600 rounded-full text-xl text-white hover:animate-pulse active:animate-pulse" href="https://web.facebook.com/IamWisdomOjimah" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn account" title="LinkedIn account">
                                    <i className="fab fa-linkedin-in text-base py-2 pl-2.5 px-2"></i>
                                </a>

                                <a className="bg-rose-500 rounded-full text-xl text-white hover:animate-pulse active:animate-pulse" href="mailto:vindicatedwisdom@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send us a mail today!" title="Send us an email today!">
                                    <i className="fas fa-envelope text-base p-2"></i>
                                </a>

                            </p>

                            <p>
                                You can also send us a direct message using the <Link href="/"><a className="text-sky-200 hover:underline hover:underline-offset-[3px] hover:decoration-sky-300">contact form</a></Link>
                            </p>

                        </div>
                                            
                    </div>

                </div>

                <div className="bg-[#373433] text-white text-center flex flex-col place-content-center gap-2 p-4">

                    <p className="text-center">
                        <i className="far fa-copyright text-base"></i> 2021. All rights reserved.
                    </p>

                    <p className="text-center">
                        All poems are intellectual properties of their respective owners.
                    </p>

                    <p className="text-center">
                        Created with all the <i className="fas fa-heart text-rose-600" aria-label="Heart icon"></i> in the world by <a className="text-blue-300 font-bold decoration-blue-400 hover:underline hover:underline-offset-[3px]" href="https://web.facebook.com/IamWisdomOjimah" target="_blank" rel="noopener noreferrer">Wisdom Ojimah</a>
                    </p>

                </div>

            </footer>

            <button className="scroll-to-top-btn fixed bottom-4 right-0 [transform-origin:0_0] translate-x-full transition-all delay-500 ease-in-out bg-main-color text-white rounded-md py-1.5 px-2.5" type="button" arial-label="Scroll to top button" onClick={scrollToTop}>
                <i className="fr fi-rr-angle-up relative top-0.5"></i>
            </button>

            <Script src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js" strategy="lazyOnload" defer />

        </>
    );
}

export default Footer;