import React from "react";
import { Link } from "react-router-dom";

const Carousel = ({ movie }) => {
	return (
		<>
			<Link className="carousel-item" to={`/movie/${movie.id}`}>
				<img
					style={{ filter: "brightness(80%)", background: "cover" }}
					src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
					className="d-block mw-100 dark-img lg-w-50"
					alt={movie.title}
				/>
				<div className="carousel-caption ">
					<h5>{movie.title}</h5>
					<h6>Rating:{movie.vote_average}</h6>
				</div>
			</Link>
		</>
	);
};

export default Carousel;
