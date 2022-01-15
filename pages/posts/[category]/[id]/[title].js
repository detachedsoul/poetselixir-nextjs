// import CategoryComponent from "../../components/CategoryComponent";
import Head from 'next/head';
import { postsApi } from '../../../../postsApi';

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

export const getStaticProps = async ({ params: { category, id, title } }) => {
    const post = postsApi.filter(post => post.category === category && post.id.toString() === id && post.title.toLowerCase() === title);

    return {
        props: {
            post,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = postsApi.map(({ category, id, title }) => ({ params: { category: category, id: id.toString(), title: title.toLowerCase() } }));

    return {
        paths,
        fallback: false
    }
}

export default Post;
