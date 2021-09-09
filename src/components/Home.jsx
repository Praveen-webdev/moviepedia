import React, { useState } from "react";
import "./Home.css";
import CarouselComponent from "./CarouselComponent.js";
import GenreList from "./Genrelist.jsx";
import Genre from "./Genre.jsx";
import Pagination from "./Pagination.jsx";

const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing?api_key=${process.env.REACT_APP_MY_API_KEY}&page=1`;
const genreUrl = `${url}/genre/movie/list?api_key=${process.env.REACT_APP_MY_API_KEY}&page=1`;

const Home = () => {
	const [genrePage, setGenrePage] = useState(0);
	const [genreId, setGenreId] = useState(28);
	const [sortValue, setSortValue] = useState("popularity.desc");
	const handleGenreFetch = (genreid) => {
		setGenrePage(0);
		setGenreId(genreid);
	};
	const handleSortFetch = (value) => {
		setGenrePage(0);
		setSortValue(value);
	};
	const moviesUrl = `${url}/discover/movie?api_key=${
		process.env.REACT_APP_MY_API_KEY
	}&page=${genrePage + 1}&with_genres=${genreId}&sort_by=${sortValue}`;
	function handlePageClick({ selected }) {
		setGenrePage(selected);
		window.scrollTo({
			top: 210,
			behavior: "smooth",
		});
	}
	return (
		<>
			<CarouselComponent url={nowPlayingUrl} />
			<GenreList
				url={genreUrl}
				handleGenreFetch={handleGenreFetch}
				handleSortFetch={handleSortFetch}
			/>
			<Genre url={moviesUrl} />
			<Pagination
				handlePageClick={handlePageClick}
				genrePage={genrePage}
			/>
		</>
	);
};

export default Home;
