import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const JobsPage = ({ page, setPage }) => {
	return <Pagination count={page < 2 ? 2 : page} />;
};

export default JobsPage;
