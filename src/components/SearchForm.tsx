import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchFormStyle } from '../styles/components/SearchFormStyle';

const SearchForm = () => {
	const history = useHistory();

	const [inputCity, setInputCity] = useState('');
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		history.push(`/${inputCity.toLowerCase()}`);
		setInputCity('');
	};

	const handleInputCity = (e: ChangeEvent<HTMLInputElement>) => setInputCity(e.target.value);

	return (
		<SearchFormStyle onSubmit={handleSubmit}>
			<input type="text" placeholder="City" onChange={handleInputCity} value={inputCity} />
			<button type="submit">
				<FontAwesomeIcon icon={faSearch} />
			</button>
		</SearchFormStyle>
	);
};

export default SearchForm;
