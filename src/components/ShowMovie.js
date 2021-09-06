import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "./useAxios.js";
import "./showmovie.css";
import Spinner from "./Spinner.js";

const ShowMovie = () => {
	const { id } = useParams();
	const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MY_API_KEY}`;
	const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_MY_API_KEY}`;
	const youtubeUrl = "https://www.youtube.com/watch?v=";
	const { data: movieDetail, isLoading } = useAxios(movieUrl);
	const { data: trailerData } = useAxios(trailerUrl);
	const trailerKey = trailerData?.results?.[0]?.key;
	console.log(movieDetail);
	console.log(trailerData);
	console.log(trailerKey);
	return (
		<div className="mt-62 mh-container">
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<div class="embed-responsive embed-responsive-16by9 img-skeleton">
						<iframe
							class="embed-responsive-item"
							src={`https://www.youtube.com/embed/${trailerKey}`}
							allowfullscreen
						></iframe>
					</div>
				</>
			)}
		</div>
	);
};

export default ShowMovie;
