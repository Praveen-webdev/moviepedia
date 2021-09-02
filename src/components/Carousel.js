import React from "react";
import { Link } from "react-router-dom";

const Carousel = ({ movie }) => {
	return (
		<>
			<div className="carousel-item">
				<img
					style={{ filter: "brightness(80%)", background: "cover" }}
					src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
					className="d-block mw-100 dark-img lg-w-50"
					alt={movie.title}
				/>
				<Link className="carousel-caption" to={`/movie/${movie.id}`}>
					<h5>{movie.title}</h5>
					<h6>Rating:{movie.vote_average}</h6>
				</Link>
			</div>
		</>
	);
};

export default Carousel;
