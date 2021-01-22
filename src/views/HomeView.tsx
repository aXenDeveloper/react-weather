import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const HomeView: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<div>Home {t('Welcome to React')}</div>
		</>
	);
};

export default HomeView;
