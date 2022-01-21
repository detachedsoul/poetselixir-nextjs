import Link from 'next/link';
import Image from 'next/image';
import PostComment from './_postComment';

const PostContent = ({ post }) => {
    return (
        <div className="grid gap-12 lg:col-span-8">

            <div className="border-b border-gray-400 pb-8">

                <div className="relative h-[250px] lg:h-[350px] xl:h-[400px] w-full">

                    <Image className="aspect-square object-cover w-full" src={post.image} alt={post.title} objectFit="cover" objectPosition="center" quality={100} title={post.title} layout="fill" priority={true}></Image>

                </div>

                <div className="pt-4 px-4 xs:px-8 sm:px-6 semi:px-4 lg:px-8">

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

                        <span className="flex gap-1.5">

                            <i className="fr fi-rr-calendar relative top-[0.15rem]"></i> {post.postedOn}

                        </span>

                        <span className="flex gap-1.5">

                            <i className="fr fi-rr-user relative top-[0.15rem]"></i>

                            <Link href={`/user/${post.postedBy}`} as={`/user/${post.postedBy.toLowerCase()}`}>
                                <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                                    {post.postedBy}
                                </a>
                            </Link>

                        </span>

                        <span className="flex gap-1.5">

                            <i className="fr fi-rr-comment-alt relative top-[0.17rem]"></i> 5

                        </span>

                    </div>

                    <h1 className="header text-3xl mt-2">
                        {post.title}
                    </h1>

                    <div className="mt-3">

                        {post.body}

                    </div>

                    <p className="font-pacifico text-xl mt-4">
                        &copy; {post.author}
                    </p>

                </div>

            </div>

            <div className="grid gap-8 pt-8 px-4 xs:px-8 sm:px-6 semi:px-4 lg:px-8">

                <PostComment />

                <div className="mt-5">

                    <h1 className="header text-xl mb-2">
                        Post a comment
                    </h1>

                    <form className="grid gap-4" method="post">

                        <div className="grid gap-y-3 gap-x-4 grid-cols-12">

                            <label className="grid gap-1 col-span-12" htmlFor="name">
                                <span>
                                    Name
                                    <span className="text-rose-800 relative pl-0.5 top-[0.18rem]">*</span>
                                </span>
                                <input className="contact-input" type="text" id="name" placeholder="Name" autoComplete="off" />
                            </label>

                            <label className="grid gap-1 col-span-12" htmlFor="messageContent">
                                <span>
                                    Comment
                                    <span className="text-rose-800 relative pl-0.5 top-[0.18rem]">*</span>
                                </span>
                                <textarea className="contact-input" name="messageContent" id="messageContent" rows="5" placeholder="Comment"></textarea>
                            </label>

                        </div>

                        <button className="form-btn" type="submit">
                            Post Comment
                            <i className="fr fi-rr-cursor-finger relative top-1"></i>
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default PostContent;