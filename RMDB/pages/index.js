import axios from "axios";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Result from "../components/Result";
import requests from "../utils/requests";

export const getServerSideProps = async (context) => {
	const { genre } = context.query;
	const { data } = await axios.get(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`);
	return {
		props: {
			data: data?.results,
		},
	};
};

export default function Home({ data }) {
	return (
		<>
			<Head>
				<title>RMDB</title>
				<meta name="description" content="RMDB App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Nav />
			<Result results={data} />
		</>
	);
}
