import AccountComponent from "../components/AccountComponent";
import Head from 'next/head';

const Account = () => {
    return (
        <>
            <Head>
                <title>Poet's Elixir &mdash; Account</title>
                <meta name="description" content="Poet's Elixir contact form page" />
            </Head>
            <AccountComponent />
        </>
    );
}

export default Account;