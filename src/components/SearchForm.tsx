import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchFormStyle = styled.form`
	background-color: rgba(0, 0, 0, 0.2);
	position: relative;
	color: #fff;
	border-radius: 5rem;
	outline: 0;

	input {
		background-color: transparent;
		border: 0;
		padding: 1rem 4rem 1rem 1.5rem;
		font-family: inherit;
		font-size: 1.6rem;
		width: 30rem;
		color: inherit;
		outline: 0;

		&::placeholder {
			color: inherit;
			opacity: 0.5;
		}
	}

	button {
		background-color: transparent;
		border: 0;
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);
		font-size: 1.6rem;
		cursor: pointer;
		color: inherit;
		height: 100%;
	}
`;

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
