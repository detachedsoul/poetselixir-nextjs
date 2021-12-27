import Head from "next/head";
import Index from "../components/Index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Poet's Elixir &mdash; Home</title>
        <meta name="description" content="Poet's Elixir &mdash; Home" />
      </Head>
      <Index />
    </>
  );
}
