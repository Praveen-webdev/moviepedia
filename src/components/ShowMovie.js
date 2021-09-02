import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "./useAxios.js";

const apiKey = `${process.env.REACT_APP_MY_API_KEY}`;
const movieDetailOptions = {
	params: { api_key: apiKey, language: "en_US" },
};
const ShowMovie = () => {
	const { id } = useParams();
	const movieUrl = `https://api.themoviedb.org/3/movie/${id}`;
	const { data: movieDetail } = useAxios(movieUrl, movieDetailOptions);
	console.log(movieDetail);
	return <div>hola</div>;
};

export default ShowMovie;
