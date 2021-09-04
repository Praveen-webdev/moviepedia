import React, { useState } from "react";
import "./Home.css";
import CarouselComponent from "./CarouselComponent.js";
import GenreList from "./Genrelist.jsx";
import Genre from "./Genre.jsx";
import Pagination from "./Pagination.jsx";

const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing?api_key=${process.env.REACT_APP_MY_API_KEY}&page=1`;
const topratedUrl = `${url}/movie/top_rated`;
const genreUrl = `${url}/genre/movie/list?api_key=${process.env.REACT_APP_MY_API_KEY}&page=1`;

const Home = () => {
	const [genrePage, setGenrePage] = useState(20);
	const [genreId, setGenreId] = useState(28);
	const handleGenreFetch = (genreid) => {
		setGenreId(genreid);
	};
	const moviesUrl = `${url}/discover/movie?api_key=${process.env.REACT_APP_MY_API_KEY}&page=${genrePage}&with_genres=${genreId}`;
	function handlePageClick({ selected: selectedPage }) {
		setGenrePage(selectedPage === 0 ? 20 : selectedPage);
		window.scrollTo({
			top: 195,
			behavior: "smooth",
		});
	}
	return (
		<>
			<CarouselComponent url={nowPlayingUrl} />
			<GenreList url={genreUrl} handleGenreFetch={handleGenreFetch} />
			<Genre url={moviesUrl} />
			<Pagination handlePageClick={handlePageClick} />
		</>
	);
};

export default Home;
