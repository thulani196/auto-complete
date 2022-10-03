import { ChangeEvent } from 'react';
import '../css/input.css';

interface InputProps {
	setSearchTerm: (value: string) => void;
	searchTerm: string;
}

const AutoCompleteInput = ({ searchTerm, setSearchTerm }: InputProps) => {
	return (
		<div className='autocomplete-container'>
			<input
				type='autocomplete'
				placeholder='Type here and click on the results to autocomplete...'
				className='autocomplete-input'
				value={searchTerm}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					setSearchTerm(event.target.value)
				}
			/>
		</div>
	);
};

export default AutoCompleteInput;
