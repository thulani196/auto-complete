import { HighlightedSuggestionProps } from '../types/autocomplete-types';
const HighlightedSuggestion = ({
	text,
	match,
	handleAutoComplete,
}: HighlightedSuggestionProps) => {
	const words = text.split(new RegExp(`(${match})`, 'gi'));

	return (
		<p
			className='suggestion suggestion-status'
			onClick={() => handleAutoComplete(text)}
			data-testid='suggestion'
		>
			{words.map((word: string, index) => (
				<span key={`${word}-${index}`}>
					{word.toLowerCase() === match.toLowerCase() ? (
						<mark data-testid='marked-word'>{word}</mark>
					) : (
						word
					)}
				</span>
			))}
		</p>
	);
};
export default HighlightedSuggestion;