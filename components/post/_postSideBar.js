import Image from 'next/image';
import Link from 'next/link';

const PostSideBar = () => {
    return (
        <div className="px-4 xs:px-8 sm:px-6 semi:px-4 lg:px-8 lg:col-span-4">
            
            <div className="sticky lg:top-20 flex flex-col gap-8">
                
                <div>

                    <h4 className="header mb-1">
                        Search Posts...
                    </h4>

                    <form className="search-form-container flex rounded-lg  group transition-all ease-linear delay-500" method="get">

                        <label className="w-full bg-white rounded-l-lg" htmlFor="post-sidebar-search-input">
                            <input className="appearance-none rounded-none w-full bg-white rounded-l-lg focus:outline-none py-1.5 px-4 hover:ring-1 hover:ring-main-color/30 hover:ring-offset-2 hover:ring-offset-white focus:ring-1 focus:ring-main-color/30 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all ease-linear delay-100 border border-gray-400" type="search" id="post-sidebar-search-input" placeholder="Search" name="post-sidebar-search-input" title="Search" />
                        </label>

                        <button className="bg-main-color text-white pt-[0.3rem] pb-[0.1rem] px-3.5 rounded-r-lg transition-all ease-linear delay-100" type="submit" aria-label="Click to search" title="Click to search">
                            <i className="fr fi-rr-search relative top-[0.1rem]"></i>
                        </button>

                    </form>

                </div>

                
                <div className="flex flex-col gap-4">

                    <h3 className="header text-2xl">
                        Related Posts
                    </h3>

                    <div className="flex flex-col gap-4">

                        <div className="border-t border-b py-2 flex gap-x-4 flex-wrap">

                            <Image src="/img/pic-7.jpg" objectFit="cover" objectPosition="center" width={50} height={50} alt="No Way Home"></Image>

                            <Link href="/posts/goodbyes/7/no way home">
                                <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                                    No Way Home
                                </a>
                            </Link>

                        </div>

                        <div className="border-t border-b py-2 flex gap-x-4 flex-wrap">

                            <Image src="/img/pic-2.jpg" objectFit="cover" objectPosition="center" width={50} height={50} alt="You Don't Love Me"></Image>

                            <Link href="/posts/depression/2/youdontloveme">
                                <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                                    You Don't Love Me
                                </a>
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-4">

                    <h3 className="header text-2xl">
                        Recent Posts
                    </h3>

                    <div className="flex flex-col gap-4">

                        <div className="border-t border-b py-2 flex gap-x-4 flex-wrap">

                            <Image src="/img/pic-4.jpg" objectFit="cover" objectPosition="center" width={50} height={50} alt="I'll Be Fine"></Image>

                            <Link href="/posts/depression/4/i'll be fine">
                                <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                                    I'll Be Fine
                                </a>
                            </Link>

                        </div>

                        <div className="border-t border-b py-2 flex gap-x-4 flex-wrap">

                            <Image src="/img/pic-1.png" objectFit="cover" objectPosition="center" width={50} height={50}></Image>

                            <Link href="/posts/grief/1/some random title">
                                <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                                    Some Random Title
                                </a>
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PostSideBar;