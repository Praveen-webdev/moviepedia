import React, { useState } from "react";
import useAxios from "./useAxios";

const Genrelist = ({ url, handleGenreFetch }) => {
	const [currentGenre, setCurrentGenre] = useState("Action");
	const { data: genreList } = useAxios(url);
	const genreListArray = genreList.genres;
	return (
		<div className="genre mt-2 d-flex sticky-top">
			<h5 style={{ color: "#5a606b", fontWeight: "bolder" }}>Genre : </h5>
			<div class="dropdown ">
				<button
					class="btn btn-warning dropdown-toggle"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					{currentGenre}
				</button>

				<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					{genreListArray &&
						genreListArray.slice(1).map((genre) => (
							<button
								key={genre.id}
								className="dropdown-item "
								onClick={() => {
									handleGenreFetch(genre.id);
									setCurrentGenre(genre.name);
								}}
							>
								{genre.name}
							</button>
						))}
				</div>
			</div>
		</div>
	);
};

export default React.memo(Genrelist);
