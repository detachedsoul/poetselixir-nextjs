import Image from 'next/image';
import Link from 'next/link';

const RandomCategoryPosts = () => {

    const categories = [
        {
            categoryID: 1,
            postReferrenceID: 0,
            categoryTitle: "Depression",
        },
        {
            categoryID: 2,
            postReferrenceID: 1,
            categoryTitle: "Heartbreak",
        }
    ];

    const posts = [
        [
            {
                id: "1",
                image: "/img/pic-3.jpg",
                date: "26 Dec, 2021",
                title: "You Don't Love Me",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi optio laboriosam laudantium aliquid porro incidunt, esse nihil non a repudiandae cupiditate ex quam. Necessitatibus illo voluptatibus explicabo error atque.",
            },

            {
                id: "2",
                image: "/img/pic-4.jpg",
                date: "26 Dec, 2021",
                title: "Memories",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi optio laboriosam laudantium aliquid porro incidunt, esse nihil non a repudiandae cupiditate ex quam. Necessitatibus illo voluptatibus explicabo error atque.",
            },

            {
                id: "3",
                image: "/img/pic-5.jpg",
                date: "26 Dec, 2021",
                title: "DeForsaken",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi optio laboriosam laudantium aliquid porro incidunt, esse nihil non a repudiandae cupiditate ex quam. Necessitatibus illo voluptatibus explicabo error atque.",
            }
        ],
        [
            {
                id: "1",
                image: "/img/pic-6.jpeg",
                date: "26 Dec, 2021",
                title: "Flowers On Your Grave",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi optio laboriosam laudantium aliquid porro incidunt, esse nihil non a repudiandae cupiditate ex quam. Necessitatibus illo voluptatibus explicabo error atque.",
            },

            {
                id: "2",
                image: "/img/pic-7.jpg",
                date: "26 Dec, 2021",
                title: "Letting Go",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi optio laboriosam laudantium aliquid porro incidunt, esse nihil non a repudiandae cupiditate ex quam. Necessitatibus illo voluptatibus explicabo error atque.",
            },

            {
                id: "3",
                image: "/img/pic-8.jpg",
                date: "26 Dec, 2021",
                title: "Wreckage",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi optio laboriosam laudantium aliquid porro incidunt, esse nihil non a repudiandae cupiditate ex quam. Necessitatibus illo voluptatibus explicabo error atque.",
            }
        ],
    ];

    return (
        <div className="space-y-12">

            {
                categories.map(category => (
                    <section key={category.categoryID}>

                        <div className="border-b border-gray-400 pb-4">

                            <div className="flex justify-between items-center gap-4 flex-wrap px-4 lg:px-12">

                                <h3 className="header text-2xl">
                                    {category.categoryTitle}
                                </h3>

                                <Link href="/all-post">
                                    <a className="view-all-btn">
                                        View All
                                        <i className="fas fa-arrow-right text-base"></i>
                                    </a>
                                </Link>

                            </div>

                        </div>

                        <div className="grid gap-8 py-8 px-4 lg:grid-cols-12 lg:gap-8 lg:px-12">

                            {

                                posts[category.postReferrenceID].map(post => (
                                    <article className="grid gap-4 md:col-span-6 lg:col-span-4" key={post.id}>

                                        <Image className="aspect-square object-center object-cover h-[200px] rounded-lg" src={post.image} alt={post.title} objectFit="cover" width="100%" height="230px" objectPosition="center" quality={100} title={post.title} layout="intrinsic"></Image>

                                        <div className="grid gap-2">

                                            <div className="flex items-center gap-4">

                                                <Link href="/category">
                                                    <a className="text-rose-800 hover:underline hover:underline-offset-[3px] hover:decoration-rose-900">
                                                        {category.categoryTitle}
                                                    </a>
                                                </Link>

                                                &bull;

                                                <span>
                                                    {post.date}
                                                </span>

                                            </div>

                                            <h2 className="font-luckiest-guy text-main-color text-2xl font-thin hover:underline hover:underline-offset-[3px] hover:decoration-main-color active:underline active:underline-offset-[3px] active:decoration-main-color w-max">
                                                <Link href="/post">
                                                    <a>
                                                        {post.title}
                                                    </a>
                                                </Link>
                                            </h2>

                                            <p>
                                                {post.content}
                                            </p>

                                            <Link href="/post">
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

                    </section >
                ))
            }
        </div>
    );

}

export default RandomCategoryPosts;