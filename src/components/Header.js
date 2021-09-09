import React, { useState } from "react";
import "./header.css";
import { useHistory } from "react-router-dom";

export default function Header({ setMovie }) {
	const history = useHistory();
	const [input, setInput] = useState("");
	function handleInputChange(e) {
		setInput(e.target.value);
	}
	function handleOnSubmit(e) {
		e.preventDefault();
		setMovie(input);
		setInput("");
		history.push("/search");
	}
	return (
		<div className="header sticky-top ">
			<nav className="navbar ">
				<div id="header-items" className="container-fluid">
					<h4 className="navbar-brand d-flex  mr-auto">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-film"
							viewBox="0 0 16 16"
						>
							<path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
						</svg>
						Moviepedia
					</h4>
					<form
						className="d-flex align-items-center"
						onSubmit={handleOnSubmit}
					>
						<input
							className="form-control "
							type="search"
							id="input"
							placeholder="Search movies"
							aria-label="Search"
							onChange={handleInputChange}
							value={input}
						/>
						<button type="submit" id="search">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-search"
								viewBox="0 0 16 16"
							>
								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg>
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
}
