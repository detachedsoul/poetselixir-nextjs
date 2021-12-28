import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import NavLinks from "./sub_components/_navLinks";
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchForm from "./sub_components/_searchForm";

const Header = () => {

    const currentPath = useRouter();

    useEffect(() => {

        let links = document.querySelectorAll('.nav-links');
        links.forEach(link => {
            if (currentPath.pathname === link.attributes.href.nodeValue) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

    }, [currentPath]);
    
    const toggleNavigationMenu = () => {
        document.querySelector('nav').classList.toggle('\[transform\:translateY\(-150\%\)\]');
    };

    const toggleSearchForm = () => {
        document.querySelector('.search-form-container').classList.toggle('\[transform\:translateY\(-10rem\)\]');
    };

    const removeActiveClassFromLinks = (navLink) => {
        let navLinks = document.querySelectorAll('.nav-links');
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
    };
    
    const addActiveClass = (navLink) => {
        closeNav();
        navLink.target.classList.add('active');
    };

    const closeNav = () => {
        toggleNavigationMenu();
        removeActiveClassFromLinks();
    };

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon" />
            </Head>

            <header className="flex flex-col gap-4 bg-opacity-50 backdrop-blur-lg bg-white text-gray-900 sticky top-0 shadow-sm z-50 lg:flex-row lg:justify-between lg:items-center lg:px-4">

                <div className="flex items-center gap-4 justify-between py-0.5 px-4 lg:px-0">
                    
                    <button className="lg:hidden" type="button" aria-label="Navigation menu toggle button" onClick={ toggleNavigationMenu }>
                        <i className="fr fi-rr-menu-burger relative top-0.5"></i>
                    </button>

                    <Link href="/">
                        <a className="h-[50px]" onClick={closeNav}>
                            <Image className="w-20 h-auto" src="/img/logo.png" alt="Post's Elixir" width={100} height={50} priority={true}></Image>
                        </a>
                    </Link>

                    <button className="lg:hidden" type="button" aria-label="Search form toggle button" onClick={ toggleSearchForm }>
                        <i className="fr fi-rr-search relative top-0.5"></i>
                    </button>

                </div>

                <nav className="bg-slate-200 absolute right-0 top-full [transform:translateY(-150%)] transition-transform delay-500 ease-linear z-10 shadow w-4/5 pl-4 py-4 [transform-origin:0_0] lg:static lg:translate-y-0 lg:w-auto lg:bg-transparent lg:shadow-none lg:p-0 lg:shrink-0">

                    <NavLinks navLinkClickEvent={ addActiveClass } />
                    
                </nav>

                <SearchForm />

            </header>
        </>
    );
}
 
export default Header;