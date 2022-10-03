import { useState } from 'react';
import { baseUrl } from '../helpers/constants';
import useDebounce from '../hooks/use-debounce';
import { useFetch } from '../hooks/use-fetch';
import AutoCompleteInput from './AutoCompleteInput';
import Results from './Results';

interface InputProps {
    searchTerm: string;
    onChange: (value: string) => void;
}

const AutoComplete = ({searchTerm, onChange}: InputProps) => {
    const [autoCompleted, setAutoCompleted] = useState<boolean>(false);
    const debouncedValue: string = useDebounce<string>(searchTerm, 500);
    const { data, loading } = useFetch(
        `${baseUrl}${debouncedValue}`,
        debouncedValue,
        autoCompleted
    );
    
    function handleAutoComplete(value: string) {
        setAutoCompleted(true);
        onChange(value);
    }

    function handleInput(value: string) {
        setAutoCompleted(false);
        onChange(value);
      }

    return (<>
        <AutoCompleteInput searchTerm={searchTerm} setSearchTerm={handleInput} />
        {loading ? (
        <span className="item" data-testid="loading-indicator">
          Loading ....
        </span>
      ) : (
        <Results
          results={!autoCompleted ? data : []}
          filter={debouncedValue}
          handleAutoComplete={handleAutoComplete}
          autoCompleted={autoCompleted}
        />
      )}
    </>);
}

export default AutoComplete;