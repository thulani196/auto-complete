import { useEffect, useState } from 'react';
import { requestOptions } from '../helpers/request-options';
import { DataProps } from '../types/autocomplete-types';
import { IMovie } from '../types/movie-types';

export function useFetch(
	url: string,
	filter: string,
	autoCompleted: boolean
): DataProps {
	const [data, setData] = useState<IMovie[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (!url || !filter || autoCompleted) return;
		const fetchData = async () => {
			setLoading(true);
			try {
				const result = await fetch(url, {
					headers: requestOptions.headers,
				});
        
				const json = await result.json();
				setData(json.d);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url, filter, autoCompleted]);
	return { data, error, loading };
}
