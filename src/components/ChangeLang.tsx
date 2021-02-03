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

	return (
		<ChangeLangStyle>
			<li>
				<button onClick={() => changeLanguage('pl')}>
					<img
						src="https://flagcdn.com/w40/pl.png"
						srcSet="https://flagcdn.com/w80/pl.png 2x"
						alt={t('lang_polish')}
						title={`${t('change_lang')} ${t('lang_polish')}`}
					/>
				</button>
			</li>

			<li>
				<button onClick={() => changeLanguage('en')}>
					<img
						src="https://flagcdn.com/w40/us.png"
						srcSet="https://flagcdn.com/w80/us.png 2x"
						alt={t('lang_usa')}
						title={`${t('change_lang')} ${t('lang_usa')}`}
					/>
				</button>
			</li>
		</ChangeLangStyle>
	);
};

export default ChangeLang;
