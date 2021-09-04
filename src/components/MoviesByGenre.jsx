import React from "react";
import { useHistory } from "react-router-dom";

const MoviesByGenre = ({ movie }) => {
	const history = useHistory();
	return (
		<div
			className="card-wrapper  "
			onClick={() => history.push(`/movie/${movie.id}`)}
		>
			<img
				src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
				alt={movie.title}
				className="genre-img img-skeleton"
			/>
			<div className="img-tip label">{movie.vote_average}</div>
			<h6 className="genre-title">{movie.title}</h6>
		</div>
	);
};

export default MoviesByGenre;
