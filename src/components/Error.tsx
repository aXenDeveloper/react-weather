import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Container } from '../styles/global';
import { ErrorStyle, ErrorIcon, ErrorContent, ErrorTitle, ErrorCode } from '../styles/components/ErrorStyles';

const Error: FC<{ children: ReactNode; code: number }> = ({ children, code }) => {
	const { t } = useTranslation();

	return (
		<Container>
			<ErrorStyle>
				<ErrorIcon>
					<FontAwesomeIcon icon={faExclamationTriangle} />
				</ErrorIcon>

				<ErrorTitle>{t('error_title')}</ErrorTitle>
				<ErrorContent>{children}</ErrorContent>

				<ErrorCode>
					{t('error_code')}: <span>{code}</span>
				</ErrorCode>
			</ErrorStyle>
		</Container>
	);
};

export default Error;
