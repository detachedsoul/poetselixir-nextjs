import CategoryComponent from "../../components/CategoryComponent";
import { server } from "../../config/config";
import Head from 'next/head';

const Category = ({ category }) => {
    return (
        <>
            <Head>
                <title>
                    Poet's Elixir &mdash; { category.map(category => category.categoryName) }
                </title>
                <meta name="description" content={ category.map(category => category.desc) } />
            </Head>
            <CategoryComponent category={ category } />
        </>
    );
}

export const getStaticProps = async (context) => {
    const req = await fetch(`${server}/api/category/${context.params.category}`, {
        method: 'GET',
        headers: {
            'User-Agent': '*',
            Accept: 'application/json; charset=UTF-8',
        },
    });
    const category = await req.json();

    return {
        props: {
            category
        }
    }
}

export const getStaticPaths = async () => {
    const req = await fetch(`${server}/api/category`, {
        method: 'GET',
        headers: {
            'User-Agent': '*',
            Accept: 'application/json; charset=UTF-8',
        },
    });
    const categories = await req.json();

    const paths = categories.map(category => ({
        params: {category: category.categoryName}
    }));

    return {
        paths,
        fallback: false
    }
}

export default Category;