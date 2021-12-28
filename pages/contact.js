import ContactComponent from "../components/ContactComponent";
import Head from 'next/head';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Poet's Elixir &mdash; Contact</title>
                <meta name="description" content="Poet's Elixir contact form page" />
            </Head>
            <ContactComponent />
        </>
    );
}
 
export default Contact;