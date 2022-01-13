// import CategoryComponent from "../../components/CategoryComponent";
import { server } from "../../../../config/config";
import Head from 'next/head';

const Post = ({ post }) => {
    return (
        <>
            <Head>
                <title>
                    {post.map(post => post.title)}
                </title>
                {/* <meta name="description" content={category.map(category => category.desc)} /> */}
            </Head>
            {console.log(post)}
            <h1>
                You got here, yay!
            </h1>
            {/* <CategoryComponent category={category} /> */}
        </>
    );
}

export const getStaticProps = async (context) => {
    const req = await fetch(`${server}/api/posts/${context.params.category}/${context.params.id}/${context.params.title}`, {
        method: 'GET',
        headers: {
            'User-Agent': '*',
            Accept: 'application/json; charset=UTF-8',
        },
    });
    const post = await req.json();

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths = async () => {
    const req = await fetch(`${server}/api/posts`, {
        method: 'GET',
        headers: {
            'User-Agent': '*',
            Accept: 'application/json; charset=UTF-8',
        },
    });
    const posts = await req.json();

    const paths = posts.map(post => ({
        params: { category: post.category, id: post.id.toString(), title: post.title.toLowerCase() }
    }));

    return {
        paths,
        fallback: false
    }
}

export default Post;