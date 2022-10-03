import { IMovie } from "./movie-types";

interface AutoCompleteProps {
	handleAutoComplete: (text: string) => void;
}
export interface HighlightedSuggestionProps extends AutoCompleteProps {
	text: string;
	match: string;
}

export interface InputProps {
	setFilter: (value: string) => void;
	filter: string;
}
export interface ResultProps {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface ResultListProps extends AutoCompleteProps {
	results?: IMovie[];
	filter?: string;
	autoCompleted: boolean;
}

type ErrorType = string | null;

export interface DataProps {
	data?: IMovie[];
	error?: Error | ErrorType;
	loading: boolean;
}
