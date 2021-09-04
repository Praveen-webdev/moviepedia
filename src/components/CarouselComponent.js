import React from "react";
import useAxios from "./useAxios.js";
import Spinner from "./Spinner.js";
import Carousel from "./Carousel.js";
import { Link } from "react-router-dom";

const CarouselComponent = ({ url }) => {
	const { data: nowPlaying, isLoading } = useAxios(url);
	const nowPlayingArray = nowPlaying.results;
	console.log("carousel");

	return (
		<>
			{nowPlayingArray == null ? (
				<div className="d-block spinner">
					<Spinner />
				</div>
			) : (
				<div
					id="carouselExampleCaptions"
					className="carousel slide carousel-fade mt-62"
					data-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								style={{ filter: "brightness(80%)" }}
								src="https://image.tmdb.org/t/p/w500/3pIqd1hgZ2xqzWEyiYp4blqE9Fi.jpg"
								className="d-block mw-100  lg-w-50 img-skeleton"
								alt="Quiet place2"
							/>
							<Link
								className="carousel-caption "
								to="/movie/522241"
							>
								<h5>The Courier</h5>
								<h3>Rating:7.1</h3>
							</Link>
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
