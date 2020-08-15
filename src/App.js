import React, { useState } from "react";
import useFetchJobs from "./hooks/useFetchJobs";
import Job from "./components/Job";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		background-color: hsl(180, 52%, 96%);
		padding: 0 10%;
		font-family: 'Spartan', sans-serif;
	}
`;

function App() {
	const [params, setParams] = useState({});
	const [page, setPage] = useState(1);

	const { jobs, loading, error } = useFetchJobs(params, page);
	return (
		<>
			<GlobalStyle />
			<div>
				{loading && <h1>loading...</h1>}
				{error && <h1>error</h1>}
				{jobs.map((job) => {
					return <Job key={job.id} job={job} />;
				})}
			</div>
		</>
	);
}

export default App;
