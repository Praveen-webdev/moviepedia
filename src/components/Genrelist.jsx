import React, { useState } from "react";
import useAxios from "./useAxios";

const Genrelist = ({ url, handleGenreFetch, handleSortFetch }) => {
	const [currentGenre, setCurrentGenre] = useState("Action");
	const [currentSort, setCurrentSort] = useState("Popularity");
	const sortBy = [
		{ name: "Popularity", value: "popularity.desc" },
		{ name: "Revenue", value: "revenue.desc" },
		{ name: "Voting", value: "vote_average.desc" },
		{ name: "Vote count", value: "vote_count.desc" },
		{ name: "Release Date", value: "primary_release_date.desc" },
	];
	const { data: genreList } = useAxios(url);
	const genreListArray = genreList.genres;
	return (
		<div className="filters mt-2  sticky-top">
			<div className="genre-dropdown mt-1 d-flex align-items-center ml-auto  w-50 ">
				<h5 style={{ color: "#5a606b", fontWeight: "bolder" }}>
					Genre :{" "}
				</h5>
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

					<div
						class="dropdown-menu"
						aria-labelledby="dropdownMenuLink"
					>
						{currentGenre !== "Action" && (
							<button
								className="dropdown-item"
								onClick={() => {
									handleGenreFetch(28);
									setCurrentGenre("Action");
								}}
							>
								Action
							</button>
						)}
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
			<div className="sortby-dropdown d-flex align-items-center ml-auto mr-5 w-50">
				<h5 style={{ color: "#5a606b", fontWeight: "bolder" }}>
					Sort by :{" "}
				</h5>
				<div class="dropdown ">
					<button
						class="btn btn-warning dropdown-toggle"
						id="dropdownMenuLink"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						{currentSort}
					</button>

					<div
						class="dropdown-menu"
						aria-labelledby="dropdownMenuLink"
					>
						{sortBy
							.slice(currentSort === "Popularity" ? 1 : 0)
							.map((sort) => (
								<button
									key={sort.value}
									className="dropdown-item "
									onClick={() => {
										handleSortFetch(sort.value);
										setCurrentSort(sort.name);
									}}
								>
									{sort.name}
								</button>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Genrelist);
