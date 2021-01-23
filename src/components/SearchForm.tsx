import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
	const history = useHistory();

	const [inputCity, setInputCity] = useState('');
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		history.push(`/${inputCity.toLowerCase()}`);
	};

	const handleInputCity = (e: ChangeEvent<HTMLInputElement>) => setInputCity(e.target.value);

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="City" onChange={handleInputCity} value={inputCity} />
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchForm;
