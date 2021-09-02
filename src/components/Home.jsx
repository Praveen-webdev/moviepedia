import React from "react";
import "./Home.css";
import CarouselComponent from "./CarouselComponent.js";
import GenreList from "./Genrelist.jsx";

const apiKey = `${process.env.REACT_APP_MY_API_KEY}`;
const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const nowPlayingOptions = {
	params: { api_key: apiKey, language: "en_US", page: 1 },
};

const genreListOptions = {
	params: { api_key: apiKey, language: "en_US", page: 1 },
};
const handleGenreFetch = (genreId) => {
	console.log(genreId);
};
const Home = () => {
	return (
		<div className="home">
			<CarouselComponent
				url={nowPlayingUrl}
				options={nowPlayingOptions}
			/>
			<GenreList
				url={genreUrl}
				options={genreListOptions}
				handleGenreFetch={handleGenreFetch}
			/>
		</div>
	);
};

export default Home;
