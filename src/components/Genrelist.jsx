import React, { useState } from "react";
import useAxios from "./useAxios";

const Genrelist = ({ url, handleGenreFetch }) => {
	const [currentGenre, setCurrentGenre] = useState("Action");
	const { data: genreList } = useAxios(url);
	const genreListArray = genreList.genres;
	return (
		<div className="genre mt-2 d-flex sticky-top">
			<h4>Genre : </h4>
			<div class="dropdown ">
				<a
					class="btn btn-warning dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					{currentGenre}
				</a>

				<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					{genreListArray &&
						genreListArray.slice(1).map((genre) => (
							<a
								key={genre.id}
								className="dropdown-item "
								onClick={() => {
									handleGenreFetch(genre.id);
									setCurrentGenre(genre.name);
								}}
							>
								{genre.name}
							</a>
						))}
				</div>
			</div>
		</div>
	);
};

export default React.memo(Genrelist);
