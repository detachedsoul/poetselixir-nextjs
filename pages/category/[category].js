import CategoryComponent from "../../components/CategoryComponent";
import { categoryApi } from "../../categoryApi";
import Head from 'next/head';

const Category = ({ categories }) => {
    return (
        <>
            <Head>
                <title>
                    Poet's Elixir &mdash; { categories.map(category => category.categoryName) }
                </title>
                <meta name="description" content={ categories.map(category => category.desc) } />
            </Head>
            <CategoryComponent category={ categories } />
        </>
    );
}

export const getStaticProps = async ({ params: { category } }) => {
    const categories = categoryApi.filter(categories => categories.categoryName === category);

    return {
        props: {
            categories,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = categoryApi.map(({ categoryName }) => ({ params: { category: categoryName } }));

    return {
        paths,
        fallback: false
    }
}

export default Category;