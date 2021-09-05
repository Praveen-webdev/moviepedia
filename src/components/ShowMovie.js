import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "./useAxios.js";

const ShowMovie = () => {
	const { id } = useParams();
	const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MY_API_KEY}`;
	const { data: movieDetail } = useAxios(movieUrl);
	console.log(movieDetail);
	return <div className="mt-62 mh-container">hola</div>;
};

export default ShowMovie;
