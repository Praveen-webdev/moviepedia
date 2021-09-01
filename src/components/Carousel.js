import React from "react";
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
				<div className="carousel-caption ">
					<h5>{movie.title}</h5>
					<h6>Rating:{movie.vote_average}</h6>
				</div>
			</div>
		</>
	);
};

export default Carousel;
