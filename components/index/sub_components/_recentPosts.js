import Image from "next/image";
import Link from "next/link";

const RecentPosts = () => {

    const posts = [
        {
            id: "1",
            image: "/img/pic-1.png",
            category: "grief",
            date: "25 Dec, 2021",
            title: "Some Random Title",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi optio laboriosam laudantium aliquid porro incidunt, esse nihil non a repudiandae cupiditate ex quam. Necessitatibus illo voluptatibus explicabo error atque.",
        },
        {
            id: "3",
            image: "/img/pic-2.jpg",
            category: "goodbyes",
            date: "25 Dec, 2021",
            title: "Everthing's Going My Way",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi optio laboriosam laudantium aliquid porro incidunt, esse nihil non a repudiandae cupiditate ex quam. Necessitatibus illo voluptatibus explicabo error atque.",
        },
    ];

    return (
        <section>

            <div className="border-b border-gray-400 pb-4">

                <div className="flex justify-between items-center gap-x-4 gap-y-1 flex-wrap px-4 xs:px-8 sm:px-6 semi:px-4 lg:px-12">

                    <h3 className="header text-2xl"> 
                        Recent Posts
                    </h3>

                    <Link href="/posts">
                        <a className="view-all-btn">
                            View All
                            <i className="fas fa-arrow-right text-base"></i>
                        </a>
                    </Link>

                </div>

            </div>

            <div className="grid gap-8 py-8 px-4 xs:px-8 sm:px-6 semi:px-4 semi:grid-cols-12 lg:gap-8 lg:px-12">
                
                {
                    posts.map(post => (
                        <article className="grid gap-4 semi:col-span-6" key={post.id}>

                            <div className="relative h-[200px] lg:h-[250px] xl:h-[300px]">

                                <Image className="aspect-square object-cover w-full rounded-lg" src={post.image} alt={post.title} objectFit="cover" objectPosition="center" width="100%" height="100%" quality={100} title={post.title} layout="fill"></Image>

                            </div>
                            

                            <div className="grid gap-2">

                                <div className="flex items-center flex-wrap gap-x-4 gap-y-1">

                                    <Link href={`/category/${post.category}`}>
                                        <a className="capitalize text-rose-800 hover:underline hover:underline-offset-[3px] hover:decoration-rose-900">
                                            {post.category}
                                        </a>
                                    </Link>

                                    &bull;

                                    <span>
                                        {post.date}
                                    </span>

                                </div>

                                <h2 className="font-luckiest-guy text-main-color text-2xl font-thin">
                                    <Link href={`/posts/${post.category}/${post.id}/${post.title.toLowerCase()}`}>
                                        <a className="hover:underline hover:underline-offset-[3px] hover:decoration-main-color active:underline active:underline-offset-[3px] active:decoration-main-color">
                                            {post.title}
                                        </a>
                                    </Link>
                                </h2>

                                <p>
                                    {post.content}
                                </p>

                                <Link href={`/posts/${post.category}/${post.id}/${post.title.toLowerCase()}`}>
                                    <a className="continue-reading-btn group">
                                        Continue Reading
                                        <i className="fas fa-arrow-right text-base opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100"></i>
                                    </a>
                                </Link>

                            </div>

                        </article>
                    ))
                }


            </div>

        </section>
    );
}
 
export default RecentPosts;