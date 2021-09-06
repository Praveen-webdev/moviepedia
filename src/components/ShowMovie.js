import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "./useAxios.js";
import "./Home.css";
import Spinner from "./Spinner.js";
import { useHistory } from "react-router-dom";

const ShowMovie = () => {
	const history = useHistory();
	const { id } = useParams();
	const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MY_API_KEY}`;
	const { data: movieDetail, isLoading } = useAxios(movieUrl);
	const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_MY_API_KEY}`;
	const { data: trailerData } = useAxios(trailerUrl);
	const trailerKey = trailerData?.results?.[0]?.key;
	const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_MY_API_KEY}`;
	const { data: castObj } = useAxios(castUrl);
	const castData = castObj?.cast;
	const castScroller = () => {
		document.getElementById("cast-scroller").scrollLeft += 100;
	};
	const castList = castData?.slice(0, 10).map((c, i) => {
		return (
			<div className="col-4 text-center profile" key={i}>
				<img
					className="img-fluid rounded-circle mx-auto d-block "
					src={`https://image.tmdb.org/t/p/w200/${c.profile_path}`}
					alt={c.name}
				></img>
				<p
					className="font-weight-bold text-center"
					style={{ color: "white" }}
				>
					{c.name}
				</p>
				<p
					className="font-weight-light text-center"
					style={{ color: "#5a606b" }}
				>
					{c.character}
				</p>
			</div>
		);
	});
	const similarMovieUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_MY_API_KEY}`;
	const { data: similarMovieObj } = useAxios(similarMovieUrl);
	const similarMovieData = similarMovieObj?.results;
	console.log(similarMovieData);
	const similarMovie = similarMovieData?.slice(0, 10).map((movie) => {
		return (
			<div
				className="card-wrapper"
				key={movie.id}
				onClick={() => history.push(`/movie/${movie.id}`)}
			>
				<img
					src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
					alt={movie.title}
					className="genre-img img-skeleton"
				/>
				<div className="img-tip label">
					{movie.vote_average.toFixed(1)}
				</div>
				<h6 className="genre-title">{movie.title}</h6>
			</div>
		);
	});

	return (
		<div className="mt-62 mh-container">
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<div className="embed-responsive embed-responsive-16by9 img-skeleton">
						<iframe
							title="trailer"
							allowFullScreen
							mozallowfullscreen="true"
							webkitallowfullscreen="true"
							className="embed-responsive-item"
							src={`https://www.youtube.com/embed/${trailerKey}`}
						></iframe>
					</div>
					<div className="container">
						<h4 className="mt-1 text-center font-weight-bold text-center d-flex justify-content-center">
							{movieDetail?.title}{" "}
							<div className="label">
								{movieDetail?.vote_average}
							</div>
						</h4>
						<div className="mt-3 ">
							<p>OVERVIEW </p>
							{movieDetail?.overview}
						</div>
						<div class="divider div-transparent div-dot"></div>
						<div className="mt-3 ">
							<p>CAST</p>
							<div
								className=" d-inline-block float-right scroll-btn"
								onClick={castScroller}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									fill="#FAB005"
									class="bi bi-arrow-right-circle-fill"
									viewBox="0 0 16 16"
								>
									<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
								</svg>
							</div>
							<div class="container-fluid cast-container">
								<div
									class="row cast-wrapper flex-row flex-nowrap"
									id="cast-scroller"
								>
									{castList}
								</div>
							</div>{" "}
						</div>
						<div class="divider div-transparent div-dot"></div>
						<div className="mt-3 ">
							<p>SIMILAR MOVIES</p>
							<div className="mt-2 card-container mh-container ">
								{similarMovie}
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ShowMovie;
