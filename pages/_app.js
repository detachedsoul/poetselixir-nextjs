import "../styles/globals.css";
import "../public/fonts/fonts.min.css";
import "../public/icons/uicons.min.css";
import "../public/icons/all.min.css";
import Layout from "./_layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
