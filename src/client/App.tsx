import * as React from 'react';
import { useEffect } from 'react';

const App: React.FC<AppProps> = (props) => {
	useEffect(() => {
		const testPlz = async () => {
			const res = await fetch('/api/lulz', {
				method: 'GET',
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjMsInVuaXEiOiJjZTUzYzc5MDg3ZTgxNzg4MjYzOWFlNjAiLCJpZCI6MywiaWF0IjoxNTk1MDAyNDEyLCJleHAiOjE1OTYyOTg0MTJ9.duDi4qXtI3y9KI0d4fWnYnY5DvlcQyBfH0V3BFZp3gs'
				}
			});
			if (res.ok) {
				const lulz = await res.json();
				console.log(lulz);
			}
		};
		testPlz();
	}, []);

	return (
		<main className="container">
			<section className="row">
				<div className="col-12">
					<h1 className="text-primary text-center display-1">Loll</h1>
				</div>
			</section>
		</main>
	);
};

interface AppProps {}

export default App;
