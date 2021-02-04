import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchFormStyle } from '../styles/components/SearchFormStyles';

const SearchForm = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const [inputCity, setInputCity] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    history.push(`/${inputCity.toLowerCase()}`);
    setInputCity('');
  };

  const handleInputCity = (e: ChangeEvent<HTMLInputElement>) => setInputCity(e.target.value);

  return (
    <SearchFormStyle onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder={t('input_search_placeholder')}
        onChange={handleInputCity}
        value={inputCity}
        aria-label={t('input_search_placeholder')}
        title={t('input_search_placeholder')}
      />

      <button type="submit" aria-label={t('input_search_button')}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </SearchFormStyle>
  );
};

export default SearchForm;
