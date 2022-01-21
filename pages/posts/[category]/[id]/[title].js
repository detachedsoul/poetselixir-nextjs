import PostComponent from "@components/PostComponent";
import Head from 'next/head';
import Link from 'next/link';
import { postsApi } from '../../../../postsApi';

const Post = ({ post }) => {
    return (
        <>
            <Head>
                <title>
                    {post.map(post => post.title)}
                </title>
                <meta name="description" content={post.map(post => post.title)} />
            </Head>
            {post.map(post => (

            <div className="py-12" key={post.id}>
                    
                <div className="border-b border-gray-400 pb-4">

                    <div className="capitalize flex items-center gap-1 flex-wrap px-4 xs:px-8 lg:px-12">

                        <Link href="/">
                            <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                                Home
                            </a>
                        </Link>

                        <i className="fr fi-rr-angle-small-right relative top-[0.25rem] text-blue-600"></i>

                        <Link href={`/category/${post.category.toLowerCase()}`}>
                            <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                                {post.category}
                            </a>
                        </Link>

                        <i className="fr fi-rr-angle-small-right relative top-[0.25rem] text-blue-600"></i>

                        <span className="capitalize">
                            {post.title}
                        </span>

                    </div>

                </div>
                    
                <PostComponent data={post} />

            </div>

            ))}
        </>
    );
}

export const getStaticProps = async ({params: {category, id, title} }) => {
    const post = postsApi.filter(post => post.category === category && post.id.toString() === id && post.title.toLowerCase() === title);

    return {
        props: {
            post,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = postsApi.map(({category, id, title}) => ({params: {category: category, id: id.toString(), title: title.toLowerCase() } }));

    return {
        paths,
        fallback: false
    }
}

export default Post;