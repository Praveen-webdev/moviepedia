import React from "react";
import useAxios from "./useAxios.js";
import Spinner from "./Spinner.js";
import Carousel from "./Carousel.js";

const CarouselComponent = ({ url }) => {
	const { data: nowPlaying, isLoading } = useAxios(url);
	const nowPlayingArray = nowPlaying.results;
	console.log("carousel");
	console.log(isLoading);

	return (
		<>
			{nowPlayingArray == null ? (
				<div className="d-block spinner">
					<Spinner />
				</div>
			) : (
				<div
					id="carouselExampleCaptions"
					className="carousel slide"
					data-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								style={{ filter: "brightness(80%)" }}
								src="https://image.tmdb.org/t/p/w500/z2UtGA1WggESspi6KOXeo66lvLx.jpg"
								className="d-block mw-100  lg-w-50"
								alt="Quiet place2"
							/>
							<div className="carousel-caption ">
								<h5>A Quiet Place </h5>
								<h3>Rating:8.7</h3>
							</div>
						</div>
						{nowPlayingArray.map((movie) => (
							<Carousel key={movie.id} movie={movie} />
						))}
						<a
							className="carousel-control-prev"
							href="#carouselExampleCaptions"
							role="button"
							data-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="sr-only"></span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleCaptions"
							role="button"
							data-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="sr-only"></span>
						</a>
					</div>
				</div>
			)}
		</>
	);
};

export default React.memo(CarouselComponent);
