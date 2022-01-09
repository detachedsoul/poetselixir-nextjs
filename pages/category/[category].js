import { categoryApi } from '../../categoryApi';
import CategoryComponent from "../../components/CategoryComponent";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Category = ({ category }) => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Poet's Elixir &mdash; Account</title>
                <meta name="description" content="Poet's Elixir contact form page" />
            </Head>
            <CategoryComponent category={ category } />
        </>
    );
}

export const getStaticProps = async (context) => {
    const req = await fetch(`http://localhost:3000/api/category/${context.params.category}`);
    const category = await req.json();

    return {
        props: {
            category
        }
    }
}

export const getStaticPaths = async (context) => {
    const req = await fetch(`http://localhost:3000/api/category`);
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