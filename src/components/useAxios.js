import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url) {
	const [data, setData] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = () => {
			setIsLoading(true);
			setError(null);
			axios
				.get(url)
				.then(({ data }) => {
					setData(data);
					setIsLoading(false);
				})
				.catch((err) => {
					setIsLoading(false);
					setError("error");
				});
		};
		fetchData();
	}, [url]);
	return { data, error, isLoading };
}

export default useAxios;
