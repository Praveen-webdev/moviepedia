import React from "react";
import useAxios from "./useAxios";
import MoviesbyGenre from "./MoviesByGenre.jsx";
import Spinner from "./Spinner";

const Genre = ({ url }) => {
	const { data, isLoading } = useAxios(url);
	const genreData = data.results;
	console.log(genreData);

	return (
		<>
			{genreData == null ? (
				<Spinner />
			) : isLoading ? (
				<Spinner />
			) : (
				<div className="mt-2 genre-container ">
					{genreData.slice(0, 18).map((movie) => (
						<MoviesbyGenre movie={movie} key={movie.id} />
					))}
				</div>
			)}
		</>
	);
};

export default React.memo(Genre);
