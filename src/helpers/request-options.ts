import { apiHost, methodGet } from "./constants";

const apiKey = process.env.REACT_APP_API || '';

export const requestOptions = {
	method: methodGet,
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': apiHost,
	},
};
