import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavLinks from "./sub_components/_navLinks";
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchForm from "./sub_components/_searchForm";

const Header = () => {

    const currentPath = useRouter();

    const [isActive, setNavActive] = useState(false);
    const [isSearchBarActive, setSearchBarActive] = useState(false);
    const [isDropdownActive, setDropdownActive] = useState(false);

    useEffect(() => {

        let links = document.querySelectorAll('.nav-links');
        links.forEach(link => {
            if (currentPath.pathname === link.attributes.href.nodeValue) {
                closeNav();
                link.classList.add('active');
            } else {
                if (currentPath.asPath === link.attributes.href.nodeValue) {
                    closeNav();
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath]);

    const removeActiveClassFromLinks = () => {
        let navLinks = document.querySelectorAll('.nav-links');
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
    };
    
    const addActiveClass = (navLink) => {
        navLink.target.classList.add('active');
        closeNav();
    };

    const closeNav = () => {
        if (isActive) {
            setNavActive(() => !isActive);
        }
        if (isDropdownActive) {
            setDropdownActive(() => !isDropdownActive);
        }
        if (isSearchBarActive) {
            setSearchBarActive (() => !isSearchBarActive);
        }
        removeActiveClassFromLinks();
    };

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon" />
            </Head>

            <header className="flex flex-col gap-4 text-gray-900 sticky top-0 shadow-sm z-50 lg:bg-white lg:bg-opacity-50 lg:backdrop-blur-3xl lg:flex-row lg:justify-between lg:items-center lg:px-4 xl:py-4">

                <div className="backdrop-blur-3xl bg-white bg-opacity-50 flex items-center gap-4 justify-between py-0.5 px-4 xs:px-8 lg:px-0 lg:bg-transparent lg:opacity-100 lg:backdrop-blur-none">
                    
                    <button className="lg:hidden" type="button" aria-label="Navigation menu toggle button" onClick={() => {
                        setNavActive (() => !isActive);
                    }}>
                        <i className="fr fi-rr-menu-burger relative top-0.5"></i>
                    </button>

                    <Link href="/">
                        <a className="h-[50px]" onClick={closeNav}>
                            <Image className="w-20 h-auto" src="/img/logo.png" alt="Post's Elixir" width={100} height={50} priority={true}></Image>
                        </a>
                    </Link>

                    <button className="lg:hidden" type="button" aria-label="Search form toggle button" onClick={() => {
                        setSearchBarActive (() => !isSearchBarActive);
                    }}>
                        <i className="fr fi-rr-search relative top-0.5"></i>
                    </button>

                </div>

                <nav className={`bg-white absolute right-0 top-full ${isActive ? 'translate-y-0' : '[transform:translateY(-150%)]'} transition-transform delay-500 ease-linear z-10 shadow w-4/5 semi:w-2/5 pl-4 py-4 [transform-origin:0_0] lg:static lg:translate-y-0 lg:w-auto lg:bg-transparent lg:shadow-none lg:p-0 lg:shrink-0`}>

                    <NavLinks 
                        navLinkClickEvent={ addActiveClass } 
                        dropdownEvent={ setDropdownActive } 
                        isDropdownActive={ isDropdownActive } 
                    />
                    
                </nav>

                <SearchForm active={isSearchBarActive} />

            </header>
        </>
    );
}
 
export default Header;