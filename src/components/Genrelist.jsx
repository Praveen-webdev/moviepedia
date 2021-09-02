import React, { useState } from "react";
import useAxios from "./useAxios";

const Genrelist = ({ url, handleGenreFetch }) => {
	const [currentGenre, setCurrentGenre] = useState("Select Genre");
	const { data: genreList } = useAxios(url);
	const genreListArray = genreList.genres;
	console.log("genres");
	return (
		<div className="genre mt-1 d-flex">
			<h4>Category:</h4>
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
						genreListArray.slice(0, 9).map((genre) => (
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
