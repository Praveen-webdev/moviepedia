import React from "react";
import useAxios from "./useAxios.js";
import Spinner from "./Spinner.js";
import "./moviesearch.css";
import "./Home.css";
import { useHistory } from "react-router-dom";

const MovieSearch = ({ movie }) => {
	const history = useHistory();
	const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MY_API_KEY}&query=${movie}`;
	const { data: searchedMovieData, isLoading, error } = useAxios(searchURL);
	const searchedMovie = searchedMovieData?.results;
	return (
		<>
			{error === "error" ? (
				<div className=" mh-container  emptysearch">
					<h2 className="text-warning text-center">
						Please type something
					</h2>
					<div>
						<button
							className="btn btn-warning home-btn "
							onClick={() => history.push("/")}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-house-door-fill"
								viewBox="0 0 16 16"
							>
								<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
							</svg>
						</button>
					</div>
				</div>
			) : searchedMovie == null ? (
				<div className="mh-container">
					<Spinner />
				</div>
			) : isLoading ? (
				<div className="mh-container">
					<Spinner />
				</div>
			) : (
				<div>
					<button
						className="btn btn-warning home-btn"
						onClick={() => history.push("/")}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-house-door-fill"
							viewBox="0 0 16 16"
						>
							<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
						</svg>
					</button>

					<div className=" card-container mh-container mb-5">
						{searchedMovie.length === 0 ? (
							<div class="error-page-wrap">
								<article class="error-page gradient">
									<hgroup>
										<h1>404</h1>
										<h2>No results found!</h2>
									</hgroup>
									<button
										onClick={() => history.push("/")}
										title="Back to site"
										class="error-back"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-box-arrow-in-left"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
												d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
											/>
											<path
												fill-rule="evenodd"
												d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
											/>
										</svg>
										Back to home
									</button>
								</article>
							</div>
						) : (
							searchedMovie.map(
								(movie) =>
									movie.backdrop_path && (
										<div
											className="card-wrapper  "
											onClick={() =>
												history.push(
													`/movie/${movie.id}`
												)
											}
										>
											<img
												src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
												alt={movie.title}
												className="genre-img img-skeleton"
											/>
											<div className="img-tip label">
												{movie.vote_average}
											</div>
											<h6 className="genre-title">
												{movie.title}
											</h6>
										</div>
									)
							)
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default MovieSearch;
