import { LangContextType, useLang } from '../context';
import i18n from '../i18n';

const ChangeLang = () => {
	const { setLang } = useLang() as LangContextType;

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		setLang(lng);
		console.log(lng);
	};

	return (
		<div>
			<button onClick={() => changeLanguage('pl')}>pl</button>
			<button onClick={() => changeLanguage('en')}>en</button>
		</div>
	);
};

export default ChangeLang;
