import React, { useState } from "react";
import "./Home.css";
import CarouselComponent from "./CarouselComponent.js";
import GenreList from "./Genrelist.jsx";
import Genre from "./Genre.jsx";

const apiKey = `${process.env.REACT_APP_MY_API_KEY}`;
const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing?api_key=${process.env.REACT_APP_MY_API_KEY}&page=1`;
const topratedUrl = `${url}/movie/top_rated`;
const genreUrl = `${url}/genre/movie/list?api_key=${process.env.REACT_APP_MY_API_KEY}&page=1`;
const personUrl = `${url}/trending/person/week`;

const Home = () => {
	const [genrePage, setGenrePage] = useState(1);
	const [genreId, setGenreId] = useState(37);
	const handleGenreFetch = (genreid) => {
		setGenreId(genreid);
	};
	const moviesUrl = `${url}/discover/movie?api_key=${process.env.REACT_APP_MY_API_KEY}&page=${genrePage}&with_genres=${genreId}`;

	return (
		<div className="home">
			<CarouselComponent url={nowPlayingUrl} />
			<GenreList url={genreUrl} handleGenreFetch={handleGenreFetch} />
			<Genre url={moviesUrl} />
		</div>
	);
};

export default Home;
