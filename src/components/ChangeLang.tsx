import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { useLang } from '../context/useLang';
import { LangContextType } from '../types/contextTypes';
import { ChangeLangStyle } from '../styles/components/ChangeLangStyles';
import { useEffect } from 'react';

const ChangeLang = () => {
	const { lang, setLang } = useLang() as LangContextType;
	const { t } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		setLang(lng);
	};

	useEffect(() => {
		document.documentElement.lang = lang;
	}, [lang]);

	const createLang = (lang: string, lang_flag: string, lang_full: string) => (
		<li>
			<button onClick={() => changeLanguage(lang)}>
				<img
					src={`https://flagcdn.com/w40/${lang_flag}.png`}
					srcSet={`https://flagcdn.com/w80/${lang_flag}.png 2x`}
					alt={t(`lang_${lang_full}`)}
					title={`${t('change_lang')} ${t(`lang_${lang_full}`)}`}
				/>
			</button>
		</li>
	);

	return (
		<ChangeLangStyle>
			{createLang('pl', 'pl', 'polish')}
			{createLang('en', 'us', 'usa')}
		</ChangeLangStyle>
	);
};

export default ChangeLang;
