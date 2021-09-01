import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url, options) {
	const [data, setData] = useState({});
	const [error, setError] = useState("");

	useEffect(() => {
		axios
			.get(url, options)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => setError(`error in${url}`));
	}, []);
	return { data, error };
}

export default useAxios;
