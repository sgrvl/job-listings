import React, { useState } from "react";
import useFetchJobs from "./hooks/useFetchJobs";
import Job from "./components/Card/Job";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	body {
		background-color: hsl(180, 52%, 96%);
		padding: 0 10%;
		font-family: 'Spartan', sans-serif;
	}
`;

const theme = {
	main: "hsl(180, 29%, 50%)",
};

const Wrap = styled.div`
	max-width: 1440px;
	margin: 0 auto;
`;

function App() {
	const [params, setParams] = useState({});
	const [page, setPage] = useState(1);

	const { jobs, loading, error } = useFetchJobs(params, page);
	return (
		<>
			<GlobalStyle />
			<Wrap>
				<ThemeProvider theme={theme}>
					{loading && <h1>loading...</h1>}
					{error && <h1>error</h1>}
					{jobs.map((job) => {
						return <Job key={job.id} job={job} />;
					})}
				</ThemeProvider>
			</Wrap>
		</>
	);
}

export default App;
