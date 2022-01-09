import Link from 'next/link';
import Image from 'next/image';

const CategoryPost = ({ category }) => {
    return (
        <>
            {
                category.map(category => (
                    <section key={category.categoryID}>

                        <div className="grid gap-8 py-8 px-4 xs:px-8 sm:px-6 semi:px-4 semi:grid-cols-12 lg:gap-8 lg:px-12">

                            {

                                category.posts.map(post => (
                                    <article className="grid gap-4 semi:col-span-6 lg:col-span-4" key={post.id}>

                                        <Image className="aspect-square object-cover w-full h-[200px] rounded-lg" src={post.image} alt={post.title} objectFit="cover" objectPosition="center" width="100%" height="200px" quality={100} title={post.title} layout="intrinsic"></Image>

                                        <div className="grid gap-2">

                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">

                                                <Link href={`/category/${category.categoryName}`}>
                                                    <a className="capitalize text-rose-800 hover:underline hover:underline-offset-[3px] hover:decoration-rose-900">
                                                        {category.categoryName}
                                                    </a>
                                                </Link>

                                                &bull;

                                                <span>
                                                    {post.postedOn}
                                                </span>

                                            </div>

                                            <h2 className="font-luckiest-guy text-main-color text-2xl font-thin ">
                                                <Link href="/post">
                                                    <a className="hover:underline hover:underline-offset-[3px] hover:decoration-main-color active:underline active:underline-offset-[3px] active:decoration-main-color">
                                                        {post.title}
                                                    </a>
                                                </Link>
                                            </h2>

                                            <p>
                                                {post.excerpt}
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
        </>
    );
}

export default CategoryPost;