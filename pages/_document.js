import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="font-mulish bg-gray-100 text-[#030313] antialiased tracking-wide text-[1.1rem] overscroll-contain selection:bg-main-color selection:text-white break-words scroll-smooth">
					<Main/>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
