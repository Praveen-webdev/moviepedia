import React, { useEffect } from "react";
import useAxios from "./useAxios.js";

const apiKey = `${process.env.REACT_APP_MY_API_KEY}`;
const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const nowPlayingOptions = {
	params: { api_key: apiKey, language: "en_US", page: 1 },
};

const Home = () => {
	const { data: nowPlaying } = useAxios(nowPlayingUrl, nowPlayingOptions);
	console.log(nowPlaying);

	return <div className="container">home</div>;
};

export default Home;
