import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url) {
	const [data, setData] = useState({});
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = () => {
			axios
				.get(url)
				.then((res) => {
					setData(res.data);
					setIsLoading(false);
				})
				.catch((err) => setError(`error in${url}`));
		};
		fetchData();
	}, [url]);
	return { data, error, isLoading };
}

export default useAxios;
