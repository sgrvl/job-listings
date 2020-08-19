import React, { useState } from "react";
import useFetchJobs from "./hooks/useFetchJobs";
import Job from "./components/Card/Card";
import Header from "./components/Header";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import JobsPage from "./components/JobsPage";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	html {
		scroll-behavior: smooth;
	}
	body {
		margin: 0;
		background-color: hsl(180, 52%, 96%);		
		font-family: 'Spartan', sans-serif;
	}
`;

const theme = {
	main: "hsl(180, 29%, 50%)",
	darkFont: "hsl(180, 14%, 20%)",
};

const Wrap = styled.div`
	padding: 0 10%;
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
			<ThemeProvider theme={theme}>
				<Header />
				<JobsPage page={page} setPage={setPage} />
				<Wrap>
					{loading && <h1>loading...</h1>}
					{error && <h1>error</h1>}
					{jobs.map((job) => {
						return <Job key={job.id} job={job} />;
					})}
				</Wrap>
			</ThemeProvider>
		</>
	);
}

export default App;
