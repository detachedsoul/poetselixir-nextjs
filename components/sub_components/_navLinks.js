import Link from 'next/link';

const NavLinks = ({ navLinkClickEvent, dropdownEvent, isDropdownActive }) => {

    const navLinks = [
        {
            id: 1,
            linkName: "Home",
            routeName: "/",
            icon: "fr fi-rr-bank",
            isDropdown: false
        },
        {
            id: 2,
            linkName: "Categories",
            routeName: "/category",
            icon: "fr fi-rr-settings",
            isDropdown: true,
            dropdownLinks: [
                {
                    id: 1,
                    linkName: "Goodbyes",
                    routeName: "/category/goodbyes",
                },
                {
                    id: 2,
                    linkName: "Grief",
                    routeName: "/category/grief",
                },
                {
                    id: 3,
                    linkName: "Depression",
                    routeName: "/category/depression",
                },
            ]
        },
        {
            id: 3,
            linkName: "Admin",
            routeName: "/admin",
            icon: "fr fi-rr-user",
            isDropdown: false
        },
        {
            id: 4,
            linkName: "Account",
            routeName: "/account",
            icon: "fr fi-rr-user-add",
            isDropdown: false
        },
        {
            id: 5,
            linkName: "Contact",
            routeName: "/contact",
            icon: "fr fi-rr-envelope",
            isDropdown: false
        },
    ];

    return (

        <ul className="flex flex-col gap-2 lg:flex-row">

            {
                navLinks.map(navLink => (
                    <li className={`${navLink.isDropdown ? 'relative' : ''}`} key={navLink.id}>

                        <Link href={navLink.routeName}>
                            
                            <a className="nav-links flex items-center gap-2.5 py-2 px-4 rounded-tl-full rounded-bl-full ease-linear hover:bg-main-color hover:text-white hover:font-semibold lg:hover:text-main-color lg:hover:bg-transparent" onClick={(e) => {
                                if (navLink.isDropdown) {
                                    e.preventDefault();
                                    dropdownEvent(() => !isDropdownActive);
                                    return;
                                } else {
                                    navLinkClickEvent
                                }
                            }}>
                                
                                <i className={`${navLink.icon} relative text-base top-[0.1rem]`}></i>
                                
                                {navLink.linkName}

                            </a>

                        </Link>

                        {
                            (navLink.isDropdown) 

                            &&

                            <div className={`bg-slate-50 absolute [width:calc(100%-1rem)] lg:w-[calc(100%+5rem)] z-10 top-[115%]  p-4 shadow-md left-4 rounded transition-all delay-500 ease-in lg:top-[120%] ${isDropdownActive ? '' : 'scale-0'}`}>
                                
                                <ul className="flex flex-col gap-y-2">

                                    {navLink.dropdownLinks.map(dropdownLink => (
                                        <li key={dropdownLink.id}>
                                            <Link href={dropdownLink.routeName}>
                                            
                                                <a className="hover:text-white hover:bg-main-color rounded active:text-white active:bg-main-color transition-colors py-1.5 px-4 block">
                                                    {dropdownLink.linkName}
                                                </a>

                                            </Link>
                                        </li>
                                    ))}

                                </ul>

                            </div>
                        }

                    </li>
                ))
            }

        </ul>
    );
}
 
export default NavLinks;