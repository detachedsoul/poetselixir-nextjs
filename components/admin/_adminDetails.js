import Image from "next/image";
import Link from "next/link";

const AdminDetails = () => {

    const userDetails = [
        {
            id: 1,
            name: "Wisdom Ojimah",
            username: "detachedsoul",
            profilePic: "/img/wisdom_ojimah.jpg",
            bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis eveniet totam soluta expedita laborum veniam, porro numquam eum officiis."
        },
        {
            id: 2,
            name: "Faith Etamowa",
            username: "faithy",
            profilePic: "/img/faith_etamowa.jpg",
            bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis eveniet totam soluta expedita laborum veniam, porro numquam eum officiis."
        },
        {
            id: 3,
            name: "Rekpene Obite",
            username: "aloticaldamsel",
            profilePic: "/img/rekpene_obite.jpg",
            bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis eveniet totam soluta expedita laborum veniam, porro numquam eum officiis."
        },
    ];

    return (
        <div className="px-4 xs:px-8 sm:px-6 semi:px-4 lg:px-12 grid gap-8 semi:grid-cols-12">

            {
                userDetails.map(user => (
                    <div className="grid gap-3 semi:col-span-6 lg:col-span-4" key={ user.id }>

                        <Image className="aspect-square object-center object-cover h-[200px] rounded-lg" src={user.profilePic} alt={user.name} objectFit="cover" width="100%" height="230px" objectPosition="center" quality={100} title={user.name} layout="intrinsic"></Image>

                        <div className="grid gap-x-2 gap-y-1 pl-2">

                            <div className="flex flex-col">

                                <h2 className="header">
                                    { user.name }
                                </h2>

                                <Link href="/user-post">
                                    <a className="text-rose-800 w-max hover:underline hover:underline-offset-[3px] hover:decoration-rose-900 active:underline active:underline-offset-[3px] active:decoration-rose-900">
                                       @{ user.username }
                                    </a>
                                </Link>

                            </div>

                            <p>
                                { user.bio }
                            </p>

                        </div>

                    </div>
                ))
            }

        </div>
    );
}
 
export default AdminDetails;