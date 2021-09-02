import React from "react";
import useAxios from "./useAxios";

const Genre = ({ url }) => {
	const { data } = useAxios(url);
	const moviesByGenre = data?.results;
	console.log(moviesByGenre);
	return <div></div>;
};

export default React.memo(Genre);
