import { ResultListProps } from '../types/autocomplete-types';
import HighlightedSuggestion from './HighlightedSuggestion';
import '../css/suggestions.css';

const Results = ({
	results,
	filter,
	handleAutoComplete,
	autoCompleted,
}: ResultListProps) => {
	if (!filter || autoCompleted) return null; // we don't want to show anything until a user starts typing
	if ((!results || !results.length) && filter) {
		return (
			<p className='suggestion' data-testid='no-results'>
				No results found for <mark>{filter}</mark>
			</p>
		);
	}
	return (
		<div className='suggestion-container'>
			{results?.map((item) => (
				<div className='flex-parent-element'>
					<div className='flex-child-element magenta'>
						{item.i !== undefined ? (
							<img
								className=''
								src={item.i.imageUrl}
								alt={item.id}
								height='50px'
								width='50px'
							/>
						) : (
							<div />
						)}
					</div>
					<div className='flex-title'>
						<HighlightedSuggestion
							key={item.id}
							text={item.l}
							match={filter}
							handleAutoComplete={handleAutoComplete}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Results;
