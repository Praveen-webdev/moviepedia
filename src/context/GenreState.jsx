import React, { createContext, useReducer, useMemo } from "react";

export const GenreContext = createContext();
let genreOptions = {
	params: {
		api_key: `${process.env.REACT_APP_MY_API_KEY}`,
		language: "en_US",
		page: 1,
		with_genres: 57,
	},
};
const reducer = (state, action) => {};
const GenreState = (props) => {
	const [state, dispatch] = useReducer(reducer, genreOptions);
	const memoizedValue = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);
	return (
		<GenreContext.Provider value={{ memoizedValue }}>
			{props.children}
		</GenreContext.Provider>
	);
};

export default GenreState;
