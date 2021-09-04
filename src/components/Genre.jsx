import React from "react";
import useAxios from "./useAxios";
import MoviesbyGenre from "./MoviesByGenre.jsx";
import Spinner from "./Spinner";

const Genre = ({ url }) => {
	const { data, isLoading } = useAxios(url);
	const genreData = data.results;

	return (
		<>
			{genreData == null ? (
				<div className="mh-container">
					<Spinner />
				</div>
			) : isLoading ? (
				<div className="mh-container">
					<Spinner />
				</div>
			) : (
				<div className="mt-2 card-container mh-container ">
					{genreData.slice(0, 18).map((movie) => (
						<MoviesbyGenre movie={movie} key={movie.id} />
					))}
				</div>
			)}
		</>
	);
};

export default React.memo(Genre);
