import Link from 'next/link';

const FooterRecentPostLinks = () => {

    const recentPostLinks = [
        {
            id: 1,
            routeName: "/post",
            title: "Flowers On Your Grave"
        },
        {
            id: 2,
            routeName: "/post",
            title: "Silent Seduction"
        },
        {
            id: 3,
            routeName: "/post",
            title: "The Forsaken"
        },
        {
            id: 4,
            routeName: "/post",
            title: "Warped & Twisted"
        },
    ];

    return (
        <>
            {
                recentPostLinks.map(recentPostLink => (
                    <li key={recentPostLink.id}>
                        <Link href={recentPostLink.routeName}>
                            <a className="text-sky-200 hover:underline hover:underline-offset-[3px] hover:decoration-sky-300">
                                {recentPostLink.title}
                            </a>
                        </Link>
                    </li>
                ))
            }
        </>
    );
}
 
export default FooterRecentPostLinks;