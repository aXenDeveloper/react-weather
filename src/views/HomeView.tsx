import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLang } from '../context';

const HomeView: FC = () => {
	const { t } = useTranslation();

	const lang = useLang();
	console.log(lang);

	return <div>Home {t('Welcome to React')}</div>;
};

export default HomeView;
