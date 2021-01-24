import { useTranslation } from 'react-i18next';

const HomeView = () => {
	const { t } = useTranslation();

	return (
		<>
			<div>Home {t('Welcome to React')}</div>
		</>
	);
};

export default HomeView;
