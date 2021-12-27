import AdminComponent from '../components/AdminComponent';
import Head from 'next/head';

const Admin = () => {
    return (
        <>
            <Head>
                <title>Poet's Elixir &mdash; Admin</title>
                <meta name="description" content="Poet's Elixir Admins" />
            </Head>

            <AdminComponent />
        </>
    );
}

export default Admin;