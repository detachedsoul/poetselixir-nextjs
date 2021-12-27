import Link from 'next/link';

const NavLinks = ({ navLinkClickEvent }) => {

    const navLinks = [
        {
            id: 1,
            linkName: "Home",
            routeName: "/",
            icon: "fr fi-rr-bank"
        },
        {
            id: 2,
            linkName: "Categories",
            routeName: "/categories",
            icon: "fr fi-rr-settings"
        },
        {
            id: 3,
            linkName: "Admin",
            routeName: "/admin",
            icon: "fr fi-rr-user"
        },
        {
            id: 4,
            linkName: "Account",
            routeName: "/account",
            icon: "fr fi-rr-user-add"
        },
        {
            id: 5,
            linkName: "Contact",
            routeName: "/contact",
            icon: "fr fi-rr-envelope"
        }
    ];

    return (

        <ul className="flex flex-col gap-2 lg:flex-row">

            {
                navLinks.map(navLink => (
                    <li key={navLink.id}>

                        <Link href={navLink.routeName}>
                            
                            <a className="nav-links flex items-center gap-2.5 py-2 px-4 rounded-tl-full rounded-bl-full ease-linear hover:bg-main-color hover:text-white hover:font-semibold lg:hover:text-main-color lg:hover:bg-transparent" onClick={navLinkClickEvent}>
                                
                                <i className={`${navLink.icon} relative text-base top-[0.1rem]`}></i>
                                
                                {navLink.linkName}

                            </a>

                        </Link>

                    </li>
                ))
            }

        </ul>
    );
}
 
export default NavLinks;