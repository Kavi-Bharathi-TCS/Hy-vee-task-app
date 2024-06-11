import Head from "next/head";
import NameForm from "../components/NameForm";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Next.js Task App</title>
				<meta name="description" content="A simple Next.js app to guess age, gender, and nationality" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className="text-center">Get Age, Gender, and Nationality</h1>
				<NameForm />
			</main>
		</div>
	);
}
